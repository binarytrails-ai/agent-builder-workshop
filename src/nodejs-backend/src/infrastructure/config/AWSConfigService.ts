import { TravelConfig } from '@domain/models/TravelConfig'
import type { DynamoDBConfig } from '@infrastructure/adapters/BaseDynamoDBRepository'

/**
 * AWS Configuration Service
 * Loads configuration from environment variables, Parameter Store, or defaults
 */
export class AWSConfigService {
  private static instance: AWSConfigService
  private config: TravelConfig | null = null

  private constructor() {}

  static getInstance(): AWSConfigService {
    if (!AWSConfigService.instance) {
      AWSConfigService.instance = new AWSConfigService()
    }
    return AWSConfigService.instance
  }

  async loadConfig(): Promise<TravelConfig> {
    if (this.config) {
      return this.config
    }

    // In production, you might load from AWS Parameter Store
    // For now, we'll use environment variables with sensible defaults
    const env = process.env

    const config: TravelConfig = {
      // GitHub Models configuration
      useGitHubModels: env['USE_GITHUB_MODELS'] === 'true',
      githubModelsBaseUrl: env['GITHUB_MODELS_BASE_URL'] || 'https://models.inference.ai.azure.com',
      githubTextModelId: env['GITHUB_TEXT_MODEL_ID'] || 'gpt-4o',
      githubEmbeddingModelId: env['GITHUB_EMBEDDING_MODEL_ID'] || 'openai/text-embedding-ada-002',

      // AWS configuration
      awsRegion: env['AWS_REGION'] || 'us-east-1',
      bedrockModel: env['BEDROCK_MODEL'] || 'anthropic.claude-3-sonnet-20240229-v1:0',

      // DynamoDB configuration
      dynamoDBTablePrefix: env['DYNAMODB_TABLE_PREFIX'] || 'contoso-travel',
      dynamoDBChatHistoryTable: env['DYNAMODB_CHAT_HISTORY_TABLE'] || 'contoso-travel-chat-history',
      dynamoDBUserProfileTable: env['DYNAMODB_USER_PROFILE_TABLE'] || 'contoso-travel-user-profiles',
      dynamoDBFlightsTable: env['DYNAMODB_FLIGHTS_TABLE'] || 'contoso-travel-flights',

      // OpenTelemetry configuration
      // Mem0 configuration
      mem0Endpoint: env['MEM0_ENDPOINT'] || 'https://api.mem0.ai',

      // Lambda/API configuration
      jwtSecret: env['JWT_SECRET'] || '',
      cognitoUserPoolId: env['COGNITO_USER_POOL_ID'] || '',
      cognitoUserPoolClientId: env['COGNITO_USER_POOL_CLIENT_ID'] || '',
      environment: (env['NODE_ENV'] as TravelConfig['environment']) || 'development'
    }

    if (env['GITHUB_TOKEN']) {
      Object.assign(config, { githubToken: env['GITHUB_TOKEN'] })
    }
    if (env['BEDROCK_ENDPOINT']) {
      Object.assign(config, { bedrockEndpoint: env['BEDROCK_ENDPOINT'] })
    }
    if (env['AWS_ACCESS_KEY_ID']) {
      Object.assign(config, { awsAccessKeyId: env['AWS_ACCESS_KEY_ID'] })
    }
    if (env['AWS_SECRET_ACCESS_KEY']) {
      Object.assign(config, { awsSecretAccessKey: env['AWS_SECRET_ACCESS_KEY'] })
    }
    if (env['OTEL_EXPORTER_OTLP_ENDPOINT']) {
      Object.assign(config, { otelExporterOtlpEndpoint: env['OTEL_EXPORTER_OTLP_ENDPOINT'] })
    }
    if (env['MEM0_API_KEY']) {
      Object.assign(config, { mem0ApiKey: env['MEM0_API_KEY'] })
    }

    this.config = config
    return config
  }

  getConfig(): TravelConfig {
    if (!this.config) {
      throw new Error('Configuration not loaded. Call loadConfig() first.')
    }
    return this.config
  }

  /**
   * Validates that all required configuration is present
   */
  validateConfig(): { isValid: boolean; missingKeys: string[] } {
    if (!this.config) {
      return { isValid: false, missingKeys: ['Configuration not loaded'] }
    }

    const requiredForAllEnvironments: Array<keyof TravelConfig> = [
      'awsRegion',
      'bedrockModel',
      'dynamoDBTablePrefix',
      'jwtSecret',
      'cognitoUserPoolId',
      'cognitoUserPoolClientId'
    ]

    const missingKeys: string[] = []

    for (const key of requiredForAllEnvironments) {
      const value = this.config[key]
      if (!value || (typeof value === 'string' && value.trim().length === 0)) {
        missingKeys.push(key)
      }
    }

    if (this.config.environment === 'production') {
      if (this.config.cognitoUserPoolId.includes('development')) {
        missingKeys.push('cognitoUserPoolId (looks non-production)')
      }
    }

    return {
      isValid: missingKeys.length === 0,
      missingKeys
    }
  }

  /**
   * Gets DynamoDB configuration
   */
  getDynamoDBConfig(): DynamoDBConfig {
    const config = this.getConfig()
    const endpoint = config.environment === 'development' ? process.env['DYNAMODB_ENDPOINT'] : undefined

    return {
      region: config.awsRegion,
      tablePrefix: config.dynamoDBTablePrefix,
      ...(endpoint ? { endpoint } : {})
    }
  }

  /**
   * Gets Bedrock configuration
   */
  getBedrockConfig() {
    const config = this.getConfig()
    return {
      region: config.awsRegion,
      model: config.bedrockModel,
      endpoint: config.bedrockEndpoint
    }
  }

  /**
   * Gets authentication configuration
   */
  getAuthConfig() {
    const config = this.getConfig()
    return {
      jwtSecret: config.jwtSecret,
      cognitoUserPoolId: config.cognitoUserPoolId,
      cognitoUserPoolClientId: config.cognitoUserPoolClientId,
      region: config.awsRegion
    }
  }
}