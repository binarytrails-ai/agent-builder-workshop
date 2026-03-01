import { Container } from 'inversify'
import { Logger } from '@aws-lambda-powertools/logger'
import { TYPES } from './types'

// Infrastructure Services
import { AWSConfigService } from './AWSConfigService'
import { DynamoDBUserProfileRepository } from '@infrastructure/adapters/DynamoDBUserProfileRepository'
import { DynamoDBChatHistoryRepository } from '@infrastructure/adapters/DynamoDBChatHistoryRepository'
import { DynamoDBFlightSearchRepository } from '@infrastructure/adapters/DynamoDBFlightSearchRepository'
import { TravelAgentService } from '@application/services/TravelAgentService'

/**
 * Dependency Injection Container Configuration
 * Sets up all service bindings for the application
 */
export async function configureContainer(): Promise<Container> {
  const container = new Container()

  // Configuration - load config first
  const configService = AWSConfigService.getInstance()
  await configService.loadConfig()
  container.bind(TYPES.AppConfig).toConstantValue(configService)

  // Logging
  const logger = new Logger({ serviceName: 'contoso-travel-agent' })
  container.bind(TYPES.Logger).toConstantValue(logger)

  // Infrastructure - Repositories
  container.bind(TYPES.UserProfileRepository).toDynamicValue(() => {
    const config = container.get<AWSConfigService>(TYPES.AppConfig)
    const logger = container.get<Logger>(TYPES.Logger)
    return new DynamoDBUserProfileRepository(config.getDynamoDBConfig(), logger)
  })

  container.bind(TYPES.ChatHistoryRepository).toDynamicValue(() => {
    const config = container.get<AWSConfigService>(TYPES.AppConfig)
    const logger = container.get<Logger>(TYPES.Logger)
    return new DynamoDBChatHistoryRepository(config.getDynamoDBConfig(), logger)
  })

  container.bind(TYPES.FlightDataRepository).toDynamicValue(() => {
    const config = container.get<AWSConfigService>(TYPES.AppConfig)
    const logger = container.get<Logger>(TYPES.Logger)
    return new DynamoDBFlightSearchRepository(config.getDynamoDBConfig(), logger)
  })

  // Application Service
  container.bind(TYPES.TravelAgentService).toDynamicValue(() => {
    const configService = container.get<AWSConfigService>(TYPES.AppConfig)
    const logger = container.get<Logger>(TYPES.Logger)

    const flightRepository = container.get<DynamoDBFlightSearchRepository>(TYPES.FlightDataRepository)
    const chatHistoryRepository = container.get<DynamoDBChatHistoryRepository>(TYPES.ChatHistoryRepository)
    const userProfileRepository = container.get<DynamoDBUserProfileRepository>(TYPES.UserProfileRepository)

    return new TravelAgentService(
      flightRepository,
      chatHistoryRepository,
      userProfileRepository,
      configService.getConfig(),
      logger
    )
  })

  return container
}

// Export configured container
export const container = configureContainer()