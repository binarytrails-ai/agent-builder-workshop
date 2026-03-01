import { Logger } from '@aws-lambda-powertools/logger'
import type { FlightSearchRepository } from '@application/ports/repositories'
import type { TravelQuery } from '@domain/entities/TravelEntities'

export interface ToolCallRequest {
  name: 'search_flights'
  arguments: {
    origin: string
    destination: string
    departureDate?: string
    travelers?: number
    maxBudget?: number
  }
}

export interface ToolCallResult {
  success: boolean
  data?: {
    flights: unknown[]
  }
  error?: string
}

export class FlightTools {
  constructor(
    private readonly flightRepository: FlightSearchRepository,
    private readonly logger: Logger
  ) {}

  async executeToolCall(request: ToolCallRequest): Promise<ToolCallResult> {
    if (request.name !== 'search_flights') {
      return {
        success: false,
        error: `Unsupported tool: ${request.name}`
      }
    }

    try {
      const departure = request.arguments.departureDate
        ? {
            city: request.arguments.origin,
            date: new Date(request.arguments.departureDate)
          }
        : {
            city: request.arguments.origin
          }

      const travelQuery: TravelQuery = {
        id: `tool-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        userId: 'tool-user',
        sessionId: 'tool-session',
        query: `Find flights from ${request.arguments.origin} to ${request.arguments.destination}`,
        departure,
        arrival: {
          city: request.arguments.destination
        },
        passengers: request.arguments.travelers ?? 1,
        ...(request.arguments.maxBudget !== undefined ? { maxPrice: request.arguments.maxBudget } : {}),
        timestamp: new Date()
      }

      const flights = await this.flightRepository.search(travelQuery)

      return {
        success: true,
        data: {
          flights
        }
      }
    } catch (error) {
      this.logger.error('Flight tool execution failed', { error, request })
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown flight tool error'
      }
    }
  }
}
