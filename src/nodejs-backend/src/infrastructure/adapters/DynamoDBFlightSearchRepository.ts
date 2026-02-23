import { injectable } from 'inversify'
import { QueryCommand, ScanCommand, GetCommand } from '@aws-sdk/lib-dynamodb'
import { Logger } from '@aws-lambda-powertools/logger'
import { BaseDynamoDBRepository, DynamoDBConfig } from './BaseDynamoDBRepository'
import { FlightSearchRepository } from '@application/ports/repositories'
import type { TravelQuery, FlightInfo } from '@domain/entities/TravelEntities'

/**
 * DynamoDB implementation of FlightSearchRepository
 * Table Design:
 * - PK: routeId (e.g., "JFK-LAX")
 * - SK: flightDate (YYYY-MM-DD)
 * - GSI: price-index for price-based queries
 * - GSI: duration-index for duration-based queries
 * - LSI: airline-index for same route, different airlines
 */
@injectable()
export class DynamoDBFlightSearchRepository extends BaseDynamoDBRepository implements FlightSearchRepository {
  private readonly tableName: string

  constructor(config: DynamoDBConfig, logger: Logger) {
    super(config, logger)
    this.tableName = this.getTableName('flights-data')
  }

  async search(query: TravelQuery): Promise<FlightInfo[]> {
    try {
      const routeId = this.buildRouteId(
        query.departure?.airport || query.departure?.city || '',
        query.arrival?.airport || query.arrival?.city || ''
      )

      let queryCommand: QueryCommand

      if (query.departure?.date) {
        // Query specific date
        const flightDate = query.departure.date.toISOString().split('T')[0]
        
        queryCommand = new QueryCommand({
          TableName: this.tableName,
          KeyConditionExpression: 'routeId = :routeId AND flightDate = :flightDate',
          ExpressionAttributeValues: {
            ':routeId': routeId,
            ':flightDate': flightDate
          }
        })
      } else {
        // Query all flights for route
        queryCommand = new QueryCommand({
          TableName: this.tableName,
          KeyConditionExpression: 'routeId = :routeId',
          ExpressionAttributeValues: {
            ':routeId': routeId
          },
          Limit: 50 // Don't return too many results
        })
      }

      const result = await this.docClient.send(queryCommand)
      let flights = (result.Items || []).map(item => this.mapDynamoItemToFlight(item))

      // Apply filters
      flights = this.applyQueryFilters(flights, query)

      // Sort by preference
      flights = this.sortFlightsByPreference(flights, query)

      this.logger.debug('Flight search completed', { 
        routeId, 
        queryDate: query.departure?.date?.toISOString(),
        resultCount: flights.length 
      })

      return flights
    } catch (error) {
      this.handleDynamoDBError(error, 'search flights')
    }
  }

  async findById(flightId: string): Promise<FlightInfo | null> {
    try {
      // For simplicity, we'll scan for the flight ID
      // In a real system, you'd want a GSI on flightId
      const result = await this.docClient.send(new ScanCommand({
        TableName: this.tableName,
        FilterExpression: 'flightId = :flightId',
        ExpressionAttributeValues: {
          ':flightId': flightId
        },
        Limit: 1
      }))

      if (!result.Items || result.Items.length === 0) {
        return null
      }

      return this.mapDynamoItemToFlight(result.Items[0])
    } catch (error) {
      this.handleDynamoDBError(error, 'findById')
    }
  }

  async findByRoute(departure: string, arrival: string, date: Date): Promise<FlightInfo[]> {
    try {
      const routeId = this.buildRouteId(departure, arrival)
      const flightDate = date.toISOString().split('T')[0]

      const result = await this.docClient.send(new QueryCommand({
        TableName: this.tableName,
        KeyConditionExpression: 'routeId = :routeId AND flightDate = :flightDate',
        ExpressionAttributeValues: {
          ':routeId': routeId,
          ':flightDate': flightDate
        }
      }))

      if (!result.Items) {
        return []
      }

      return result.Items.map(item => this.mapDynamoItemToFlight(item))
    } catch (error) {
      this.handleDynamoDBError(error, 'findByRoute')
    }
  }

  private buildRouteId(departure: string, arrival: string): string {
    // Normalize airport codes or city names
    const dep = departure.toUpperCase().trim()
    const arr = arrival.toUpperCase().trim()
    return `${dep}-${arr}`
  }

  private applyQueryFilters(flights: FlightInfo[], query: TravelQuery): FlightInfo[] {
    let filtered = [...flights]

    // Filter by max price
    if (query.maxPrice) {
      filtered = filtered.filter(flight => flight.price <= query.maxPrice!)
    }

    // Filter by direct flights preference
    if (query.preferences?.directFlights) {
      filtered = filtered.filter(flight => flight.stops === 0)
    }

    // Filter by max stops
    if (query.preferences?.maxStops !== undefined) {
      filtered = filtered.filter(flight => flight.stops <= query.preferences!.maxStops!)
    }

    // Filter by departure time range
    if (query.preferences?.departureTimeRange) {
      filtered = filtered.filter(flight => {
        const departureTime = flight.departure.datetime.toTimeString().slice(0, 5) // HH:mm
        const earliest = query.preferences!.departureTimeRange!.earliest
        const latest = query.preferences!.departureTimeRange!.latest
        
        return departureTime >= earliest && departureTime <= latest
      })
    }

    return filtered
  }

  private sortFlightsByPreference(flights: FlightInfo[], query: TravelQuery): FlightInfo[] {
    return flights.sort((a, b) => {
      // Sort by price (lower first)
      if (query.maxPrice) {
        if (a.price !== b.price) {
          return a.price - b.price
        }
      }

      // Sort by stops (fewer first)
      if (a.stops !== b.stops) {
        return a.stops - b.stops
      }

      // Sort by duration (shorter first)
      if (a.duration !== b.duration) {
        return a.duration - b.duration
      }

      return 0
    })
  }

  private mapDynamoItemToFlight(item: any): FlightInfo {
    return {
      id: item.flightId,
      airline: item.airline,
      flightNumber: item.flightNumber,
      departure: {
        airport: item.departureAirport,
        city: item.departureCity,
        datetime: new Date(item.departureTime)
      },
      arrival: {
        airport: item.arrivalAirport,
        city: item.arrivalCity,
        datetime: new Date(item.arrivalTime)
      },
      price: item.price,
      currency: item.currency || 'USD',
      duration: item.duration,
      stops: item.stops || 0,
      aircraft: item.aircraft
    }
  }
}