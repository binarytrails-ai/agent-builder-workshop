import 'reflect-metadata'
import { Container } from 'inversify'
import { Logger } from '@aws-lambda-powertools/logger'
import { Tracer } from '@aws-lambda-powertools/tracer'

// Initialize logger and tracer
const logger = new Logger({ serviceName: 'contoso-travel-agent' })
const tracer = new Tracer({ serviceName: 'contoso-travel-agent' })

// Initialize dependency injection container
const container = new Container()

async function bootstrap() {
  try {
    logger.info('Starting Contoso Travel Agent Node.js backend')
    
    // TODO: Initialize services and start server
    logger.info('Backend initialization complete')
  } catch (error) {
    logger.error('Failed to start backend', { error })
    process.exit(1)
  }
}

if (require.main === module) {
  bootstrap()
}

export { container, logger, tracer }