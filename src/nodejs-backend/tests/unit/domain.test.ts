import { describe, it, expect } from 'vitest'
import { TravelConfig } from '@domain/models/TravelConfig'
import { FlightInfo, UserContext, TravelQuery } from '@domain/entities/TravelEntities'

describe('TravelConfig', () => {
  it('should have required properties', () => {
    const config: TravelConfig = {
      useGitHubModels: false,
      awsRegion: 'us-east-1',
      bedrockModel: 'anthropic.claude-3-sonnet-20240229-v1:0',
      dynamoDBTablePrefix: 'contoso-travel',
      jwtSecret: 'test-secret',
      cognitoUserPoolId: 'us-east-1_test',
      environment: 'development'
    }

    expect(config.useGitHubModels).toBe(false)
    expect(config.awsRegion).toBe('us-east-1')
    expect(config.environment).toBe('development')
  })
})

describe('TravelEntities', () => {
  it('should create valid FlightInfo', () => {
    const flight: FlightInfo = {
      id: 'flight-123',
      airline: 'American Airlines',
      flightNumber: 'AA1234',
      departure: {
        airport: 'JFK',
        city: 'New York',
        datetime: new Date('2024-03-15T08:00:00Z')
      },
      arrival: {
        airport: 'LAX',
        city: 'Los Angeles',
        datetime: new Date('2024-03-15T14:30:00Z')
      },
      price: 299.99,
      currency: 'USD',
      duration: 390, // 6.5 hours
      stops: 0
    }

    expect(flight.id).toBe('flight-123')
    expect(flight.airline).toBe('American Airlines')
    expect(flight.stops).toBe(0)
    expect(flight.duration).toBe(390)
  })

  it('should create valid TravelQuery', () => {
    const query: TravelQuery = {
      id: 'query-123',
      userId: 'user-456',
      sessionId: 'session-789',
      query: 'Find flights from New York to Los Angeles',
      departure: {
        city: 'New York',
        airport: 'JFK',
        date: new Date('2024-03-15')
      },
      arrival: {
        city: 'Los Angeles',
        airport: 'LAX'
      },
      passengers: 1,
      class: 'economy',
      timestamp: new Date()
    }

    expect(query.userId).toBe('user-456')
    expect(query.passengers).toBe(1)
    expect(query.class).toBe('economy')
  })

  it('should create valid UserContext', () => {
    const userContext: UserContext = {
      userId: 'user-123',
      sessionId: 'session-456',
      preferences: {
        preferredAirlines: ['American Airlines', 'Delta'],
        seatPreference: 'window',
        mealPreference: 'vegetarian'
      },
      travelHistory: [],
      currentLocation: {
        city: 'New York',
        country: 'USA'
      }
    }

    expect(userContext.userId).toBe('user-123')
    expect(userContext.preferences.seatPreference).toBe('window')
    expect(userContext.preferences.preferredAirlines).toHaveLength(2)
  })
})