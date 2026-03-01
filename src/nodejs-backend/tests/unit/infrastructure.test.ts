import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Logger } from '@aws-lambda-powertools/logger'
import { AWSConfigService } from '@infrastructure/config/AWSConfigService'
import { DynamoDBUserProfileRepository } from '@infrastructure/adapters/DynamoDBUserProfileRepository'
import { DynamoDBChatHistoryRepository } from '@infrastructure/adapters/DynamoDBChatHistoryRepository'
import { DynamoDBFlightSearchRepository } from '@infrastructure/adapters/DynamoDBFlightSearchRepository'
import { UserProfile } from '@domain/entities/UserProfile'
import { ConversationMessage, TravelQuery } from '@domain/entities/TravelEntities'

// Mock AWS SDK client creation
const mockSend = vi.fn()
const mockClient = { send: mockSend }

vi.mock('@aws-sdk/client-dynamodb', () => ({
  DynamoDBClient: class {
    config: any
    
    constructor(config: any) {
      this.config = config
    }
    
    send = vi.fn()
  },
  CreateTableCommand: vi.fn(),
  DescribeTableCommand: vi.fn()
}))

vi.mock('@aws-sdk/lib-dynamodb', () => ({
  DynamoDBDocumentClient: {
    from: vi.fn(() => mockClient)
  },
  PutCommand: function(input) { return { input } },
  GetCommand: function(input) { return { input } },
  QueryCommand: function(input) { return { input } },
  DeleteCommand: function(input) { return { input } },
  UpdateCommand: function(input) { return { input } },
  ScanCommand: function(input) { return { input } }
}))

describe('AWSConfigService', () => {
  let configService: AWSConfigService

  beforeEach(() => {
    // Reset singleton
    ;(AWSConfigService as any).instance = undefined
    configService = AWSConfigService.getInstance()
    
    // Clear environment variables
    delete process.env.USE_GITHUB_MODELS
    delete process.env.AWS_REGION
    delete process.env.DYNAMODB_TABLE_PREFIX

    process.env.JWT_SECRET = 'test-jwt-secret-value'
    process.env.COGNITO_USER_POOL_ID = 'us-east-1_testpool'
    process.env.COGNITO_USER_POOL_CLIENT_ID = 'test-client-id'
  })

  it('should create singleton instance', () => {
    const instance1 = AWSConfigService.getInstance()
    const instance2 = AWSConfigService.getInstance()
    expect(instance1).toBe(instance2)
  })

  it('should load default configuration', async () => {
    // Set NODE_ENV to development for this test
    process.env.NODE_ENV = 'development'
    
    const config = await configService.loadConfig()
    
    expect(config.useGitHubModels).toBe(false)
    expect(config.awsRegion).toBe('us-east-1')
    expect(config.dynamoDBTablePrefix).toBe('contoso-travel')
    expect(config.environment).toBe('development')
  })

  it('should load configuration from environment variables', async () => {
    process.env.USE_GITHUB_MODELS = 'true'
    process.env.AWS_REGION = 'us-west-2'
    process.env.DYNAMODB_TABLE_PREFIX = 'test-travel'
    process.env.NODE_ENV = 'production'
    
    const config = await configService.loadConfig()
    
    expect(config.useGitHubModels).toBe(true)
    expect(config.awsRegion).toBe('us-west-2')
    expect(config.dynamoDBTablePrefix).toBe('test-travel')
    expect(config.environment).toBe('production')
  })

  it('should validate production configuration', async () => {
    // Set environment first before loading config
    process.env.NODE_ENV = 'production'
    process.env.JWT_SECRET = 'secure-production-secret'
    process.env.COGNITO_USER_POOL_ID = 'us-east-1_abcd1234'
    process.env.COGNITO_USER_POOL_CLIENT_ID = 'prod-client-id'
    
    // Create fresh instance to load new env vars
    const prodConfigService = AWSConfigService.getInstance()
    await prodConfigService.loadConfig()
    const validation = prodConfigService.validateConfig()
    
    // Should be valid in production with proper secret
    expect(validation.isValid).toBe(true)
    expect(validation.missingKeys).toHaveLength(0)
  })

  it('should detect missing required configuration', async () => {
    // Set production environment and remove required auth configuration
    process.env.NODE_ENV = 'production'
    delete process.env.JWT_SECRET
    delete process.env.COGNITO_USER_POOL_CLIENT_ID
    
    // Create fresh instance to load new env vars
    const prodConfigService = AWSConfigService.getInstance()
    await prodConfigService.loadConfig()
    const validation = prodConfigService.validateConfig()
    
    expect(validation.isValid).toBe(false)
    expect(validation.missingKeys).toContain('jwtSecret')
    expect(validation.missingKeys).toContain('cognitoUserPoolClientId')
  })

  it('should provide DynamoDB configuration', async () => {
    await configService.loadConfig()
    const dynamoConfig = configService.getDynamoDBConfig()
    
    expect(dynamoConfig.region).toBe('us-east-1')
    expect(dynamoConfig.tablePrefix).toBe('contoso-travel')
  })

  it('should provide Bedrock configuration', async () => {
    await configService.loadConfig()
    const bedrockConfig = configService.getBedrockConfig()
    
    expect(bedrockConfig.region).toBe('us-east-1')
    expect(bedrockConfig.model).toBe('anthropic.claude-3-sonnet-20240229-v1:0')
  })
})

describe('DynamoDB Repositories', () => {
  let logger: Logger

  beforeEach(() => {
    logger = new Logger({ serviceName: 'test' })
    mockSend.mockClear()
  })

  describe('DynamoDBUserProfileRepository', () => {
    let repository: DynamoDBUserProfileRepository
    let mockUserProfile: UserProfile

    beforeEach(() => {
      const config = {
        region: 'us-east-1',
        tablePrefix: 'test'
      }
      repository = new DynamoDBUserProfileRepository(config, logger)

      mockUserProfile = {
        userId: 'user-123',
        email: 'test@example.com',
        name: 'Test User',
        preferences: {
          interests: ['travel', 'food'],
          travelPreferences: {
            preferredAirlines: ['Delta'],
            seatPreference: 'window',
            mealPreference: 'vegetarian',
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
    })

    it('should find user profile by ID', async () => {
      mockSend.mockResolvedValue({
        Item: {
          userId: 'user-123',
          email: 'test@example.com',
          name: 'Test User',
          preferences: mockUserProfile.preferences,
          travelHistory: mockUserProfile.travelHistory,
          loyaltyPrograms: [],
          paymentMethods: [],
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z'
        }
      })

      const result = await repository.findById('user-123')
      
      expect(result).toBeTruthy()
      expect(result?.userId).toBe('user-123')
      expect(result?.email).toBe('test@example.com')
      expect(mockSend).toHaveBeenCalled()
    })

    it('should return null when user not found', async () => {
      mockSend.mockResolvedValue({ Item: undefined })

      const result = await repository.findById('nonexistent')
      
      expect(result).toBeNull()
    })

    it('should save user profile', async () => {
      mockSend.mockResolvedValue({})

      await repository.save(mockUserProfile)
      
      expect(mockSend).toHaveBeenCalled()
      const putCommand = mockSend.mock.calls[0][0]
      expect(putCommand.input.TableName).toBe('test-user-profiles')
      expect(putCommand.input.Item.userId).toBe('user-123')
    })

    it('should find user by email using GSI', async () => {
      mockSend.mockResolvedValue({
        Items: [{
          userId: 'user-123',
          email: 'test@example.com',
          name: 'Test User',
          preferences: mockUserProfile.preferences,
          travelHistory: mockUserProfile.travelHistory,
          loyaltyPrograms: [],
          paymentMethods: [],
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z'
        }]
      })

      const result = await repository.findByEmail('test@example.com')
      
      expect(result).toBeTruthy()
      expect(result?.email).toBe('test@example.com')
      
      const queryCommand = mockSend.mock.calls[0][0]
      expect(queryCommand.input.IndexName).toBe('email-index')
    })

    it('should update user preferences', async () => {
      mockSend.mockResolvedValue({})

      const newPreferences = {
        travelPreferences: {
          preferredAirlines: ['American Airlines'],
          seatPreference: 'aisle' as const,
          mealPreference: 'vegetarian',
          specialRequests: []
        }
      }

      await repository.updatePreferences('user-123', newPreferences)
      
      expect(mockSend).toHaveBeenCalled()
      const updateCommand = mockSend.mock.calls[0][0]
      expect(updateCommand.input.Key.userId).toBe('user-123')
    })
  })

  describe('DynamoDBChatHistoryRepository', () => {
    let repository: DynamoDBChatHistoryRepository
    let mockMessage: ConversationMessage

    beforeEach(() => {
      const config = {
        region: 'us-east-1',
        tablePrefix: 'test'
      }
      repository = new DynamoDBChatHistoryRepository(config, logger)

      mockMessage = {
        id: 'msg-123',
        sessionId: 'session-456',
        userId: 'user-789',
        role: 'user',
        content: 'Hello, I need help with flights',
        timestamp: new Date('2024-01-01T12:00:00Z')
      }
    })

    it('should save conversation message', async () => {
      mockSend.mockResolvedValue({})

      await repository.save(mockMessage)
      
      expect(mockSend).toHaveBeenCalled()
      const putCommand = mockSend.mock.calls[0][0]
      expect(putCommand.input.TableName).toBe('test-chat-history')
      expect(putCommand.input.Item.messageId).toBe('msg-123')
      expect(putCommand.input.Item.sessionId).toBe('session-456')
    })

    it('should find messages by session ID', async () => {
      mockSend.mockResolvedValue({
        Items: [{
          sessionId: 'session-456',
          timestamp: '2024-01-01T12:00:00.000Z',
          messageId: 'msg-123',
          userId: 'user-789',
          role: 'user',
          content: 'Hello, I need help with flights',
          metadata: {}
        }]
      })

      const messages = await repository.findBySessionId('session-456')
      
      expect(messages).toHaveLength(1)
      expect(messages[0].id).toBe('msg-123')
      expect(messages[0].content).toBe('Hello, I need help with flights')
      
      const queryCommand = mockSend.mock.calls[0][0]
      expect(queryCommand.input.KeyConditionExpression).toContain('sessionId = :sessionId')
    })

    it('should find messages by user ID using GSI', async () => {
      mockSend.mockResolvedValue({
        Items: [{
          sessionId: 'session-456',
          timestamp: '2024-01-01T12:00:00.000Z',
          messageId: 'msg-123',
          userId: 'user-789',
          role: 'user',
          content: 'Hello, I need help with flights',
          metadata: {}
        }]
      })

      const messages = await repository.findByUserId('user-789', 10)
      
      expect(messages).toHaveLength(1)
      expect(messages[0].userId).toBe('user-789')
      
      const queryCommand = mockSend.mock.calls[0][0]
      expect(queryCommand.input.IndexName).toBe('userId-timestamp-index')
      expect(queryCommand.input.Limit).toBe(10)
    })
  })

  describe('DynamoDBFlightSearchRepository', () => {
    let repository: DynamoDBFlightSearchRepository
    let mockQuery: TravelQuery

    beforeEach(() => {
      const config = {
        region: 'us-east-1',
        tablePrefix: 'test'
      }
      repository = new DynamoDBFlightSearchRepository(config, logger)

      mockQuery = {
        id: 'query-123',
        userId: 'user-456',
        sessionId: 'session-789',
        query: 'Flight from NYC to LAX',
        departure: {
          city: 'New York',
          airport: 'JFK',
          date: new Date('2024-06-15')
        },
        arrival: {
          city: 'Los Angeles',
          airport: 'LAX'
        },
        passengers: 2,
        maxPrice: 500,
        preferences: {
          directFlights: true,
          maxStops: 1
        },
        timestamp: new Date()
      }
    })

    it('should search flights by route and date', async () => {
      mockSend.mockResolvedValue({
        Items: [{
          routeId: 'JFK-LAX',
          flightDate: '2024-06-15',
          flightId: 'flight-123',
          airline: 'Delta',
          flightNumber: 'DL123',
          departureAirport: 'JFK',
          departureCity: 'New York',
          departureTime: '2024-06-15T08:00:00Z',
          arrivalAirport: 'LAX',
          arrivalCity: 'Los Angeles',
          arrivalTime: '2024-06-15T14:30:00Z',
          price: 450,
          currency: 'USD',
          duration: 390,
          stops: 0
        }]
      })

      const flights = await repository.search(mockQuery)
      
      expect(flights).toHaveLength(1)
      expect(flights[0].airline).toBe('Delta')
      expect(flights[0].price).toBe(450)
      expect(flights[0].stops).toBe(0)
      
      const queryCommand = mockSend.mock.calls[0][0]
      expect(queryCommand.input.KeyConditionExpression).toContain('routeId = :routeId')
    })

    it('should filter flights by preferences', async () => {
      mockSend.mockResolvedValue({
        Items: [
          {
            // Direct flight within budget
            routeId: 'JFK-LAX',
            flightDate: '2024-06-15',
            flightId: 'flight-123',
            airline: 'Delta',
            flightNumber: 'DL123',
            departureAirport: 'JFK',
            departureCity: 'New York',
            departureTime: '2024-06-15T08:00:00Z',
            arrivalAirport: 'LAX',
            arrivalCity: 'Los Angeles', 
            arrivalTime: '2024-06-15T14:30:00Z',
            price: 450,
            duration: 390,
            stops: 0
          },
          {
            // Flight with stops (should be filtered out)
            routeId: 'JFK-LAX',
            flightDate: '2024-06-15',
            flightId: 'flight-456',
            airline: 'United',
            flightNumber: 'UA456',
            departureAirport: 'JFK',
            departureCity: 'New York',
            departureTime: '2024-06-15T09:00:00Z',
            arrivalAirport: 'LAX',
            arrivalCity: 'Los Angeles',
            arrivalTime: '2024-06-15T16:30:00Z',
            price: 350,
            duration: 450,
            stops: 1
          }
        ]
      })

      const flights = await repository.search(mockQuery)
      
      // Should only return direct flights due to directFlights preference
      expect(flights).toHaveLength(1)
      expect(flights[0].stops).toBe(0)
    })

    it('should find flight by ID', async () => {
      mockSend.mockResolvedValue({
        Items: [{
          routeId: 'JFK-LAX',
          flightDate: '2024-06-15',
          flightId: 'flight-123',
          airline: 'Delta',
          flightNumber: 'DL123',
          departureAirport: 'JFK',
          departureCity: 'New York',
          departureTime: '2024-06-15T08:00:00Z',
          arrivalAirport: 'LAX',
          arrivalCity: 'Los Angeles',
          arrivalTime: '2024-06-15T14:30:00Z',
          price: 450,
          currency: 'USD',
          duration: 390,
          stops: 0
        }]
      })

      const flight = await repository.findById('flight-123')
      
      expect(flight).toBeTruthy()
      expect(flight?.id).toBe('flight-123')
      expect(flight?.airline).toBe('Delta')
    })
  })
})