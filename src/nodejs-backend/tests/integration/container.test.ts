import { describe, it, expect, beforeEach } from 'vitest'
import { configureContainer } from '@infrastructure/config/container'
import { TYPES } from '@infrastructure/config/types'
import { Logger } from '@aws-lambda-powertools/logger'
import { AWSConfigService } from '@infrastructure/config/AWSConfigService'

describe('Dependency Injection Container', () => {
  let container: any

  beforeEach(async () => {
    container = await configureContainer()
  })

  it('should resolve all core services', () => {
    // Configuration
    const config = container.get(TYPES.AppConfig)
    expect(config).toBeInstanceOf(AWSConfigService)

    // Logger
    const logger = container.get(TYPES.Logger)
    expect(logger).toBeInstanceOf(Logger)

    // Domain Services
    const travelService = container.get(TYPES.TravelAgentService)
    expect(travelService).toBeTruthy()
    expect(travelService.validateTravelQuery).toBeTypeOf('function')
  })

  it('should resolve repository services', () => {
    // Repositories
    const userProfileRepo = container.get(TYPES.UserProfileRepository)
    expect(userProfileRepo).toBeTruthy()
    expect(userProfileRepo.findById).toBeTypeOf('function')

    const chatHistoryRepo = container.get(TYPES.ChatHistoryRepository)
    expect(chatHistoryRepo).toBeTruthy()
    expect(chatHistoryRepo.save).toBeTypeOf('function')

    const flightRepo = container.get(TYPES.FlightDataRepository)
    expect(flightRepo).toBeTruthy()
    expect(flightRepo.search).toBeTypeOf('function')
  })

  it('should provide singleton configuration service', () => {
    const config1 = container.get(TYPES.AppConfig)
    const config2 = container.get(TYPES.AppConfig)
    expect(config1).toBe(config2)
  })

  it('should provide same logger instance', () => {
    const logger1 = container.get(TYPES.Logger)
    const logger2 = container.get(TYPES.Logger)
    expect(logger1).toBe(logger2)
  })

  it('should create new repository instances', () => {
    // Repositories should be new instances but with same dependencies
    const repo1 = container.get(TYPES.UserProfileRepository)
    const repo2 = container.get(TYPES.UserProfileRepository)
    
    // Different instances
    expect(repo1).not.toBe(repo2)
    
    // But same configuration
    expect(repo1).toBeInstanceOf(repo2.constructor)
  })

  it('should handle missing dependencies gracefully', () => {
    expect(() => {
      const container = configureContainer()
      // Try to get non-existent service
      container.get('NonExistentService')
    }).toThrow()
  })

  it('should validate container configuration', () => {
    const allTypes = Object.values(TYPES)
    const configurableTypes = [
      TYPES.AppConfig,
      TYPES.Logger, 
      TYPES.TravelAgentService,
      TYPES.UserProfileRepository,
      TYPES.ChatHistoryRepository,
      TYPES.FlightDataRepository
      // Note: AIService not configured yet (Phase 4)
    ]

    for (const type of configurableTypes) {
      expect(() => {
        container.get(type)
      }).not.toThrow(`Service ${type.toString()} should be resolvable`)
    }
  })
})