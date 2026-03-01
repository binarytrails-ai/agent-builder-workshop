import { 
  DynamoDBClient, 
  DescribeTableCommand
} from '@aws-sdk/client-dynamodb'
import { 
  DynamoDBDocumentClient
} from '@aws-sdk/lib-dynamodb'
import { Logger } from '@aws-lambda-powertools/logger'

export interface DynamoDBConfig {
  region: string
  tablePrefix: string
  endpoint?: string // For local development
}

/**
 * Base DynamoDB repository with common operations
 * Implements shared functionality for all DynamoDB repositories
 */
export abstract class BaseDynamoDBRepository {
  protected readonly client: DynamoDBClient
  protected readonly docClient: DynamoDBDocumentClient
  protected readonly logger: Logger
  protected readonly tablePrefix: string

  constructor(config: DynamoDBConfig, logger: Logger) {
    this.client = new DynamoDBClient({ 
      region: config.region,
      ...(config.endpoint && { endpoint: config.endpoint })
    })
    this.docClient = DynamoDBDocumentClient.from(this.client)
    this.logger = logger
    this.tablePrefix = config.tablePrefix
  }

  protected getTableName(baseName: string): string {
    return `${this.tablePrefix}-${baseName}`
  }

  protected async ensureTableExists(tableName: string): Promise<void> {
    try {
      await this.client.send(new DescribeTableCommand({ TableName: tableName }))
      this.logger.debug(`Table ${tableName} exists`)
    } catch (error: any) {
      if (error.name === 'ResourceNotFoundException') {
        this.logger.warn(`Table ${tableName} does not exist. In production, tables should be created via CDK.`)
        // In development, we might want to create tables automatically
        // In production, this should be handled by CDK
      } else {
        throw error
      }
    }
  }

  protected handleDynamoDBError(error: any, operation: string): never {
    this.logger.error(`DynamoDB ${operation} failed`, { error })
    
    if (error.name === 'ConditionalCheckFailedException') {
      throw new Error('Record was modified by another process')
    }
    
    if (error.name === 'ResourceNotFoundException') {
      throw new Error('Table or item not found')
    }
    
    if (error.name === 'ValidationException') {
      throw new Error('Invalid request parameters')
    }
    
    throw new Error(`DynamoDB ${operation} failed: ${error.message}`)
  }
}