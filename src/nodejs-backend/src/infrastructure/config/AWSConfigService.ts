import { TravelConfig } from '@domain/models/TravelConfig'

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
    this.config = {
      // GitHub Models configuration
      useGitHubModels: process.env.USE_GITHUB_MODELS === 'true' || false,
      githubToken: process.env.GITHUB_TOKEN,
      githubModelsBaseUrl: process.env.GITHUB_MODELS_BASE_URL || 'https://models.inference.ai.azure.com',
      githubTextModelId: process.env.GITHUB_TEXT_MODEL_ID || 'gpt-4o',
      githubEmbeddingModelId: process.env.GITHUB_EMBEDDING_MODEL_ID || 'openai/text-embedding-ada-002',

      // AWS configuration
      awsRegion: process.env.AWS_REGION || 'us-east-1',
      bedrockModel: process.env.BEDROCK_MODEL || 'anthropic.claude-3-sonnet-20240229-v1:0',
      bedrockEndpoint: process.env.BEDROCK_ENDPOINT,
      awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
      awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,

      // DynamoDB configuration
      dynamoDBTablePrefix: process.env.DYNAMODB_TABLE_PREFIX || 'contoso-travel',
      dynamoDBChatHistoryTable: process.env.DYNAMODB_CHAT_HISTORY_TABLE || 'contoso-travel-chat-history',
      dynamoDBUserProfileTable: process.env.DYNAMODB_USER_PROFILE_TABLE || 'contoso-travel-user-profiles',
      dynamoDBFlightsTable: process.env.DYNAMODB_FLIGHTS_TABLE || 'contoso-travel-flights',

      // OpenTelemetry configuration
      otelExporterOtlpEndpoint: process.env.OTEL_EXPORTER_OTLP_ENDPOINT,

      // Mem0 configuration
      mem0Endpoint: process.env.MEM0_ENDPOINT || 'https://api.mem0.ai',
      mem0ApiKey: process.env.MEM0_API_KEY,

      // Lambda/API configuration
      jwtSecret: process.env.JWT_SECRET || 'development-secret-change-in-production',
      cognitoUserPoolId: process.env.COGNITO_USER_POOL_ID || 'us-east-1_development',
      environment: (process.env.NODE_ENV as any) || 'development'
    }

    return this.config
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

    const requiredForProduction: Array<keyof TravelConfig> = [
      'awsRegion',
      'bedrockModel',
      'dynamoDBTablePrefix',
      'jwtSecret',
      'cognitoUserPoolId'
    ]

    const missingKeys: string[] = []

    if (this.config.environment === 'production') {
      for (const key of requiredForProduction) {
        const value = this.config[key]
        if (!value || (typeof value === 'string' && value.includes('development'))) {
          missingKeys.push(key)
        }
      }

      // Additional production checks
      if (this.config.jwtSecret === 'development-secret-change-in-production') {
        missingKeys.push('jwtSecret (using development value)')
      }
      
      if (this.config.cognitoUserPoolId.includes('development')) {
        missingKeys.push('cognitoUserPoolId (using development value)')
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
  getDynamoDBConfig() {
    const config = this.getConfig()
    return {
      region: config.awsRegion,
      tablePrefix: config.dynamoDBTablePrefix,
      endpoint: config.environment === 'development' ? process.env.DYNAMODB_ENDPOINT : undefined
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
      region: config.awsRegion
    }
  }
}