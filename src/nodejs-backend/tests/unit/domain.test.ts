import { describe, it, expect } from 'vitest'
import { TravelConfig } from '@domain/models/TravelConfig'
import { 
  FlightInfo, 
  UserContext, 
  TravelQuery, 
  TripSearchRequest,
  FlightOption,
  CalendarConflict 
} from '@domain/entities/TravelEntities'
import { UserProfile, TravelBooking, PastTrip } from '@domain/entities/UserProfile'
import { ApprovalRequest, ApprovalStatus, ApprovalWorkflow } from '@domain/entities/ApprovalWorkflow'
import { TravelDomainServiceImpl } from '@domain/services/TravelDomainServiceImpl'

describe('TravelConfig', () => {
  it('should have required properties', () => {
    const config: TravelConfig = {
      useGitHubModels: false,
      githubModelsBaseUrl: 'https://models.inference.ai.azure.com',
      githubTextModelId: 'gpt-4o',
      githubEmbeddingModelId: 'openai/text-embedding-ada-002',
      awsRegion: 'us-east-1',
      bedrockModel: 'anthropic.claude-3-sonnet-20240229-v1:0',
      dynamoDBTablePrefix: 'contoso-travel',
      dynamoDBChatHistoryTable: 'contoso-travel-chat-history',
      dynamoDBUserProfileTable: 'contoso-travel-user-profiles',
      dynamoDBFlightsTable: 'contoso-travel-flights',
      mem0Endpoint: 'https://api.mem0.ai',
      jwtSecret: 'test-secret',
      cognitoUserPoolId: 'us-east-1_test',
      environment: 'development'
    }

    expect(config.useGitHubModels).toBe(false)
    expect(config.awsRegion).toBe('us-east-1')
    expect(config.environment).toBe('development')
    expect(config.bedrockModel).toBe('anthropic.claude-3-sonnet-20240229-v1:0')
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

  it('should create valid TripSearchRequest', () => {
    const request: TripSearchRequest = {
      origin: 'New York',
      destination: 'Los Angeles', 
      departureDate: '2024-03-15',
      returnDate: '2024-03-20',
      travelers: 2,
      maxBudget: 1500
    }

    expect(request.origin).toBe('New York')
    expect(request.travelers).toBe(2)
    expect(request.maxBudget).toBe(1500)
  })

  it('should create valid FlightOption', () => {
    const option: FlightOption = {
      flightNumber: 'AA1234',
      airline: 'American Airlines',
      price: 299.99,
      departureTime: new Date('2024-03-15T08:00:00Z'),
      arrivalTime: new Date('2024-03-15T14:30:00Z'),
      similarityScore: 0.95
    }

    expect(option.flightNumber).toBe('AA1234')
    expect(option.price).toBe(299.99)
    expect(option.similarityScore).toBe(0.95)
  })

  it('should create valid CalendarConflict', () => {
    const conflict: CalendarConflict = {
      eventName: 'Important Meeting',
      eventDate: '2024-03-15',
      conflictType: 'meeting',
      canReschedule: true,
      priority: 'high'
    }

    expect(conflict.conflictType).toBe('meeting')
    expect(conflict.canReschedule).toBe(true)
    expect(conflict.priority).toBe('high')
  })
})

describe('UserProfile', () => {
  it('should create valid UserProfile with enhanced structure', () => {
    const pastTrip: PastTrip = {
      destination: 'Paris',
      rating: 'loved it',
      dateVisited: new Date('2023-06-15'),
      duration: '1 week'
    }

    const booking: TravelBooking = {
      id: 'booking-123',
      userId: 'user-456',
      status: 'confirmed',
      flights: {
        outbound: {
          flightInfo: {
            id: 'flight-123',
            airline: 'Delta',
            flightNumber: 'DL456',
            departure: { airport: 'JFK', city: 'New York', datetime: new Date() },
            arrival: { airport: 'CDG', city: 'Paris', datetime: new Date() },
            price: 800,
            currency: 'USD',
            duration: 480,
            stops: 0
          },
          seatAssignments: { 'passenger-1': '12A' },
          specialRequests: ['vegetarian meal']
        }
      },
      passengers: [{
        id: 'passenger-1',
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: new Date('1990-01-01'),
        nationality: 'US'
      }],
      totalPrice: 800,
      currency: 'USD',
      bookingReference: 'ABC123',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const userProfile: UserProfile = {
      userId: 'user-123',
      email: 'john.doe@example.com',
      name: 'John Doe',
      preferences: {
        travelStyle: 'luxury',
        budgetRange: '$3000+',
        interests: ['museums', 'fine dining', 'history'],
        numberOfTravelers: 2,
        tripDuration: '1 week',
        dietaryRequirements: 'vegetarian',
        travelPreferences: {
          preferredAirlines: ['Delta', 'American Airlines'],
          seatPreference: 'window',
          mealPreference: 'vegetarian',
          specialRequests: ['extra legroom']
        },
        communicationPreferences: {
          language: 'en',
          timezone: 'America/New_York',
          notificationMethods: ['email', 'push']
        }
      },
      travelHistory: {
        bookings: [booking],
        searches: [],
        pastDestinations: [pastTrip],
        frequentDestinations: ['Paris', 'London']
      },
      loyaltyPrograms: [{
        airline: 'Delta',
        membershipNumber: 'DL123456',
        status: 'Gold'
      }],
      paymentMethods: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }

    expect(userProfile.userId).toBe('user-123')
    expect(userProfile.preferences.travelStyle).toBe('luxury')
    expect(userProfile.preferences.interests).toHaveLength(3)
    expect(userProfile.travelHistory.bookings).toHaveLength(1)
    expect(userProfile.loyaltyPrograms[0].status).toBe('Gold')
  })
})

describe('ApprovalWorkflow', () => {
  it('should create valid ApprovalRequest', () => {
    const request: ApprovalRequest = {
      approvalId: 'approval-123',
      functionName: 'bookFlight',
      functionArguments: {
        flightId: 'flight-456',
        passengers: 2,
        totalAmount: 1200
      },
      message: 'High-value flight booking requires approval',
      requestedBy: 'user-789',
      requestedAt: new Date(),
      priority: 'high',
      category: 'flight_booking'
    }

    expect(request.approvalId).toBe('approval-123')
    expect(request.functionName).toBe('bookFlight')
    expect(request.priority).toBe('high')
    expect(request.category).toBe('flight_booking')
  })

  it('should create valid ApprovalWorkflow', () => {
    const workflow: ApprovalWorkflow = {
      id: 'workflow-123',
      request: {
        approvalId: 'approval-123',
        functionName: 'bookFlight',
        requestedBy: 'user-789',
        requestedAt: new Date(),
        priority: 'high',
        category: 'flight_booking'
      },
      status: ApprovalStatus.Pending,
      workflowSteps: [{
        id: 'step-1',
        stepName: 'Manager Approval',
        approverRole: 'travel_manager',
        requiredApprovers: 1,
        currentApprovers: [],
        status: 'pending'
      }],
      createdAt: new Date(),
      updatedAt: new Date()
    }

    expect(workflow.status).toBe(ApprovalStatus.Pending)
    expect(workflow.workflowSteps).toHaveLength(1)
    expect(workflow.workflowSteps[0].approverRole).toBe('travel_manager')
  })
})

describe('TravelDomainService', () => {
  const service = new TravelDomainServiceImpl()

  it('should validate travel query successfully', () => {
    const futureDate = new Date()
    futureDate.setMonth(futureDate.getMonth() + 3) // 3 months in future
    
    const query: TravelQuery = {
      id: 'query-123',
      userId: 'user-456',
      sessionId: 'session-789',
      query: 'Flight to Paris',
      departure: {
        city: 'New York',
        date: futureDate // Use future date
      },
      arrival: {
        city: 'Paris'
      },
      passengers: 2,
      timestamp: new Date()
    }

    const result = service.validateTravelQuery(query)
    expect(result.isValid).toBe(true)
    expect(result.errors).toHaveLength(0)
  })

  it('should detect validation errors', () => {
    const invalidQuery: TravelQuery = {
      id: 'query-123', 
      userId: 'user-456',
      sessionId: 'session-789',
      query: 'Invalid flight',
      passengers: 0, // Invalid passenger count
      timestamp: new Date()
    }

    const result = service.validateTravelQuery(invalidQuery)
    expect(result.isValid).toBe(false)
    expect(result.errors.length).toBeGreaterThan(0)
    expect(result.errors.some(e => e.code === 'INVALID_PASSENGER_COUNT')).toBe(true)
  })

  it('should parse natural language query', () => {
    const mockUserProfile: UserProfile = {
      userId: 'user-123',
      email: 'test@example.com',
      name: 'Test User',
      preferences: {
        budgetRange: '$1000-2000',
        interests: [],
        travelPreferences: {
          preferredAirlines: [],
          seatPreference: 'window',
          mealPreference: 'none',
          specialRequests: []
        },
        communicationPreferences: {
          language: 'en',
          timezone: 'UTC',
          notificationMethods: ['email']
        }
      },
      travelHistory: {
        bookings: [],
        searches: [],
        pastDestinations: [],
        frequentDestinations: []
      },
      loyaltyPrograms: [],
      paymentMethods: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const query = 'I want to fly from New York to Los Angeles with 2 passengers'
    const result = service.parseNaturalLanguageQuery(query, mockUserProfile)
    
    expect(result).toBeTruthy()
    expect(result.origin).toBe('New York')
    expect(result.destination).toBe('Los Angeles')
    expect(result.travelers).toBe(2)
  })
})