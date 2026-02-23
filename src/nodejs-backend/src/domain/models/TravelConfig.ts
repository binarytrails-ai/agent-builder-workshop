export interface TravelConfig {
  readonly useGitHubModels: boolean
  readonly githubToken?: string
  readonly openAIApiKey?: string
  readonly awsRegion: string
  readonly bedrockModel: string
  readonly dynamoDBTablePrefix: string
  readonly jwtSecret: string
  readonly cognitoUserPoolId: string
  readonly environment: 'development' | 'staging' | 'production'
}