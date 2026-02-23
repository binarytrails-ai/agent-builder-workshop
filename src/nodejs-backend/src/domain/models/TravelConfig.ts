export interface TravelConfig {
  // GitHub Models configuration
  readonly useGitHubModels: boolean
  readonly githubToken?: string
  readonly githubModelsBaseUrl: string
  readonly githubTextModelId: string
  readonly githubEmbeddingModelId: string
  
  // AWS configuration (replaces Azure)
  readonly awsRegion: string
  readonly bedrockModel: string
  readonly bedrockEndpoint?: string
  readonly awsAccessKeyId?: string
  readonly awsSecretAccessKey?: string
  
  // DynamoDB configuration (replaces Cosmos DB)
  readonly dynamoDBTablePrefix: string
  readonly dynamoDBChatHistoryTable: string
  readonly dynamoDBUserProfileTable: string
  readonly dynamoDBFlightsTable: string
  
  // OpenTelemetry configuration
  readonly otelExporterOtlpEndpoint?: string
  
  // Mem0 configuration
  readonly mem0Endpoint: string
  readonly mem0ApiKey?: string
  
  // Lambda/API configuration
  readonly jwtSecret: string
  readonly cognitoUserPoolId: string
  readonly environment: 'development' | 'staging' | 'production'
}