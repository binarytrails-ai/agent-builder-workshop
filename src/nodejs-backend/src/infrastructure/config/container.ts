import { Container } from 'inversify'
import { Logger } from '@aws-lambda-powertools/logger'
import { TYPES } from './types'

// Domain Services
import { TravelDomainServiceImpl } from '@domain/services/TravelDomainServiceImpl'

// Infrastructure Services  
import { AWSConfigService } from './AWSConfigService'
import { DynamoDBUserProfileRepository } from '@infrastructure/adapters/DynamoDBUserProfileRepository'
import { DynamoDBChatHistoryRepository } from '@infrastructure/adapters/DynamoDBChatHistoryRepository'
import { DynamoDBFlightSearchRepository } from '@infrastructure/adapters/DynamoDBFlightSearchRepository'

// Application Services (to be implemented in Phase 4)
// import { BedrockAIService } from '@infrastructure/adapters/BedrockAIService'

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

  // Domain Services
  container.bind(TYPES.TravelAgentService).to(TravelDomainServiceImpl)

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

  // AI Services (placeholder for Phase 4)
  // container.bind(TYPES.AIService).toDynamicValue((context) => {
  //   const config = context.container.get<AWSConfigService>(TYPES.AppConfig)
  //   const logger = context.container.get<Logger>(TYPES.Logger)
  //   return new BedrockAIService(config.getBedrockConfig(), logger)
  // })

  return container
}

// Export configured container
export const container = configureContainer()