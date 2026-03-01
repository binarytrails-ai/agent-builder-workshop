# MIGRATION_SPECIFICATION: C#_NET_TO_NODEJS_AWS

## TRANSFORMATION_MATRIX
```yaml
source_stack:
  runtime: dotnet-8
  framework: microsoft-agent-framework
  database: azure-cosmosdb
  ai_service: azure-ai-foundry
  infrastructure: azure-bicep
  observability: application-insights

target_stack:
  runtime: nodejs-20
  framework: langchain-typescript
  database: aws-dynamodb
  ai_service: aws-bedrock
  infrastructure: aws-cdk
  observability: opentelemetry-cloudwatch

architecture_pattern: hexagonal
```

## COMPONENT_INVENTORY
```yaml
current_components:
  agents: [ContosoTravelAgentFactory, ServerFunctionApprovalAgent]
  tools: [flight_finder, datetime_tools, user_context_tools]
  services: [CompositeMemoryProvider, chat_history, profile_management]
  models: [ContosoTravelAppConfig, TravelModels, ApprovalModels, UserProfileMemory]
  apis: [rest_endpoints, websocket_handlers]
```

## ARCHITECTURE_SPECIFICATION

```yaml
hexagonal_layers:
  primary_adapters:
    - rest_api_controller
    - graphql_resolver
    - websocket_handler
    - sse_stream_handler
  
  application_core:
    domain:
      - travel_entities
      - user_profile_entity
      - conversation_entity
    usecases:
      - process_travel_query
      - manage_conversation
      - handle_approvals
    ports:
      - memory_repository_port
      - ai_service_port
      - notification_port
  
  secondary_adapters:
    - dynamodb_repository
    - bedrock_ai_service
    - parameter_store_config
    - cloudwatch_logger
```

## EXECUTION_PHASES

```yaml
execution_order:
  phase_1_foundation:
    duration: "1_week"
    dependencies: []
    deliverables: [project_structure, typescript_config, dependency_injection]
  
  phase_2_domain:
    duration: "1_week" 
    dependencies: [phase_1_foundation]
    deliverables: [entity_models, domain_services, business_rules]
  
  phase_3_infrastructure:
    duration: "2_weeks"
    dependencies: [phase_2_domain]  
    deliverables: [dynamodb_adapters, aws_clients, configuration]
  
  phase_4_ai_services:
    duration: "2_weeks"
    dependencies: [phase_3_infrastructure]
    deliverables: [bedrock_integration, langchain_agents, tool_registry]
  
  phase_5_api_layer:
    duration: "1_week"
    dependencies: [phase_4_ai_services]
    deliverables: [fastify_server, endpoints, middleware]
  
  phase_6_infrastructure_code:
    duration: "1_week"  
    dependencies: [phase_5_api_layer]
    deliverables: [cdk_stacks, lambda_functions, api_gateway, cognito_setup]

  phase_7_auth_integration:
    duration: "3_days"
    dependencies: [phase_6_infrastructure_code]
    deliverables: [oidc_configuration, jwt_middleware, user_context_extraction]
```

## COMMAND_SPECIFICATIONS

### PHASE_1_FOUNDATION

```bash
# PROJECT_STRUCTURE_CREATION
mkdir -p src/nodejs-backend/{src/{domain/{models,entities,interfaces,services},application/{usecases,ports},infrastructure/{adapters,config},presentation/{controllers,middleware}},tests/{unit,integration,e2e},scripts,docs}

# PACKAGE_INITIALIZATION  
cd src/nodejs-backend && npm init -y

# DEPENDENCY_INSTALLATION
npm install @aws-sdk/client-bedrock@^3.450.0 @aws-sdk/client-bedrock-runtime@^3.450.0 @aws-sdk/client-dynamodb@^3.450.0 @aws-sdk/lib-dynamodb@^3.450.0 langchain@^0.1.0 @langchain/aws@^0.0.1 ai@^3.0.0 @aws-lambda-powertools/logger@^1.14.0 @aws-lambda-powertools/tracer@^1.14.0 @aws-lambda-powertools/metrics@^1.14.0 pino@^8.16.0 zod@^3.22.0 inversify@^6.0.0 reflect-metadata@^0.1.13 @opentelemetry/api@^1.7.0 jsonwebtoken@^9.0.0 jwks-client@^3.0.0 @types/aws-lambda@^8.10.0

npm install -D @types/node@^20.9.0 typescript@^5.2.0 tsx@^4.6.0 vitest@^1.0.0 testcontainers@^10.2.0 @types/jest@^29.5.0 @types/jsonwebtoken@^9.0.0 aws-lambda-test-utils@^2.0.0
```

### PHASE_2_DOMAIN_MIGRATION

```yaml
migration_mappings:
  ContosoTravelAppConfig.cs: 
    target: src/domain/models/TravelConfig.ts
    type_conversion:
      "bool UseGitHubModels": "readonly useGitHubModels: boolean"
      "string? GithubToken": "readonly githubToken?: string"
      "string? OpenAIApiKey": "readonly openAIApiKey?: string"
      "string? AzureOpenAIEndpoint": "readonly azureOpenAIEndpoint?: string"
  
  TravelModels.cs:
    target: src/domain/entities/TravelEntities.ts
    type_conversion:
      "record FlightInfo": "interface FlightInfo"
      "record UserContext": "interface UserContext" 
      "record TravelQuery": "interface TravelQuery"
  
  UserProfileMemory.cs:
    target: src/domain/entities/UserProfile.ts
    type_conversion:
      "record UserProfile": "interface UserProfile"
      "Dictionary<string, object>": "Record<string, unknown>"
  
  ApprovalModels.cs:
    target: src/domain/entities/ApprovalWorkflow.ts
    type_conversion:
      "record ApprovalRequest": "interface ApprovalRequest"
      "enum ApprovalStatus": "enum ApprovalStatus"
### PHASE_3_INFRASTRUCTURE_LAYER

```yaml
aws_service_mappings:
  azure_cosmosdb:
    target: aws_dynamodb
    table_designs:
      chat_history:
        partition_key: "sessionId" 
        sort_key: "timestamp"
        gsi: ["userId-timestamp-index"]
      user_profiles:
        partition_key: "userId"
        attributes: ["preferences", "context", "memory"]
      flights_data:
        partition_key: "routeId"
        sort_key: "date"
        gsi: ["price-index", "duration-index"]

  azure_app_services:
    target: aws_lambda
    functions:
      travel_chat_handler:
        runtime: "nodejs20.x"
        memory: 1024
        timeout: 30
        environment: ["DYNAMODB_TABLE", "BEDROCK_MODEL", "JWT_SECRET"]
      approval_handler:
        runtime: "nodejs20.x"
        memory: 512
        timeout: 15
      health_check_handler:
        runtime: "nodejs20.x"
        memory: 256
        timeout: 5

  azure_load_balancer:
    target: aws_api_gateway
    type: "REST"
    auth_type: "JWT_AUTHORIZER"
    cors_enabled: true
    throttling:
      rate_limit: 1000
      burst_limit: 2000

repository_implementations:
  - DynamoDBChatHistoryRepository
  - DynamoDBUserProfileRepository  
  - DynamoDBFlightDataRepository

aws_client_configurations:
  dynamodb:
    region: "${AWS_REGION}"
    credentials: "default_chain"
  bedrock:
    region: "${AWS_REGION}" 
    model: "anthropic.claude-3-sonnet-20240229-v1:0"

auth_configuration:
  oidc_provider:
    issuer_url: "https://cognito-idp.${AWS_REGION}.amazonaws.com/${USER_POOL_ID}"
    client_id: "${COGNITO_CLIENT_ID}"
    audience: "${API_AUDIENCE}"
  jwt_validation:
    algorithms: ["RS256"]
    verify_exp: true
    verify_aud: true
    verify_iss: true

lambda_layer_configuration:
  shared_dependencies:
    runtime: "nodejs20.x"
    includes: ["@aws-sdk", "langchain", "zod", "pino"]
  auth_layer:
    runtime: "nodejs20.x" 
    includes: ["jsonwebtoken", "jwks-client"]
```

### PHASE_4_AI_AGENT_MIGRATION

```yaml
agent_conversion_specs:
  ContosoTravelAgentFactory.cs:
    target: src/application/agents/TravelAgentFactory.ts
    framework: langchain_typescript
    deployment: lambda_function
    
  agent_workflow:
    - jwt_token_validation
    - user_identity_extraction
    - input_validation
    - context_loading
    - ai_model_invocation
    - tool_execution
    - response_formatting
    - memory_update

lambda_handler_structure:
  chat_endpoint:
    file: src/handlers/chatHandler.ts
    method: "POST"
    path: "/chat"
    auth_required: true
  approval_endpoint:
    file: src/handlers/approvalHandler.ts
    method: "POST"
    path: "/approval"
    auth_required: true
  health_endpoint:
    file: src/handlers/healthHandler.ts
    method: "GET"
    path: "/health"
    auth_required: false

tool_registry_migration:
  flight_finder_tool:
    source: src/backend/Tools/FlightFinderTool.cs
    target: src/infrastructure/tools/FlightFinderTool.ts
    interface: LangChainTool
  
  datetime_tools:
    source: src/backend/Tools/DateTimeTool.cs
    target: src/infrastructure/tools/DateTimeTool.ts
    interface: LangChainTool
  
  user_context_tools:  
    source: src/backend/Tools/UserContextTool.cs
    target: src/infrastructure/tools/UserContextTool.ts
    interface: LangChainTool

langchain_integration:
  model_provider: "@langchain/aws"
  model_class: "BedrockChat" 
  model_config:
    model: "anthropic.claude-3-sonnet-20240229-v1:0"
    temperature: 0.7
    maxTokens: 4000
```
    @inject(TYPES.Logger) private logger: Logger
  ) {}

  async getHistory(sessionId: string): Promise<ChatMessage[]> {
    const command = new QueryCommand({
      TableName: 'chat-history',
      KeyConditionExpression: 'sessionId = :sessionId',
      ExpressionAttributeValues: { ':sessionId': sessionId },
      ScanIndexForward: false,
      Limit: 50
    });
    
    const result = await this.dynamoClient.send(command);
    return result.Items?.map(item => this.mapToMessage(item)) || [];
  }
}
```

### 3.3 AWS Service Adapters
**Create adapters for:**
- **Bedrock** (replaces Azure OpenAI)
- **DynamoDB** (replaces CosmosDB)
- **CloudWatch** (replaces Application Insights)
- **Parameter Store** (replaces Key Vault)

---

## Phase 4: AI & Agent Services

### 4.1 AI Service Migration: Azure AI → AWS Bedrock

**Azure OpenAI → AWS Bedrock Model Mapping:**
- `gpt-4o` → `anthropic.claude-3-sonnet-20240229-v1:0`
- `text-embedding-ada-002` → `amazon.titan-embed-text-v1`

### 4.2 Agent Framework Migration
**From:** Microsoft Agent Framework
**To:** LangChain + Vercel AI SDK

```typescript
// src/application/services/TravelAgentService.ts
export class TravelAgentService {
  private chatModel: ChatModel;
  private embeddingModel: EmbeddingModel;
  
  constructor(
    @inject(TYPES.ChatModel) chatModel: ChatModel,
    @inject(TYPES.EmbeddingModel) embeddingModel: EmbeddingModel,
    @inject(TYPES.ToolRegistry) private toolRegistry: ToolRegistry
  ) {
    this.chatModel = chatModel;
    this.embeddingModel = embeddingModel;
  }

  async processMessage(
    message: string, 
    context: ConversationContext
  ): Promise<AgentResponse> {
    const tools = await this.toolRegistry.getAvailableTools();
    
    const chain = this.chatModel
      .bind({ tools })
      .pipe(new JsonOutputParser());
      
    return await chain.invoke({
      input: message,
      context: context,
      systemPrompt: this.getSystemPrompt()
    });
  }
}
```

### 4.3 Tools Migration
**C# Tools → TypeScript Tools:**
- `FlightFinderTools.cs` → `FlightSearchTool.ts`
- `DateTimeTools.cs` → `DateTimeTool.ts` 
- `UserContextTools.cs` → `UserContextTool.ts`

```typescript
// src/application/tools/FlightSearchTool.ts
export class FlightSearchTool extends BaseTool {
  name = "flight_search";
  description = "Search for flights between airports on specific dates";

  constructor(
    @inject(TYPES.FlightSearchService) 
    private flightService: FlightSearchService
  ) {
    super();
  }

  async _call(input: FlightSearchInput): Promise<string> {
    const results = await this.flightService.searchFlights({
      origin: input.origin,
      destination: input.destination,
      departureDate: input.departureDate,
      passengers: input.passengers || 1
    });
    
    return JSON.stringify(results);
  }
}
```

## PHASE_5_LAMBDA_HANDLER_LAYER

### LAMBDA_HANDLER_IMPLEMENTATIONS

```yaml
handler_structure:
  chat_handler:
    file: "src/handlers/chatHandler.ts"
    runtime: "nodejs20.x"
    memory: 1024
    timeout: 30
    layers: ["shared-dependencies", "auth-layer"]
    environment:
      - DYNAMODB_TABLE_CHAT
      - DYNAMODB_TABLE_PROFILES  
      - BEDROCK_MODEL
      - JWT_SECRET
      - COGNITO_USER_POOL_ID
  
  approval_handler:
    file: "src/handlers/approvalHandler.ts"
    runtime: "nodejs20.x"
    memory: 512
    timeout: 15
    layers: ["shared-dependencies", "auth-layer"]
  
  health_handler:
    file: "src/handlers/healthHandler.ts"
    runtime: "nodejs20.x"
    memory: 256
    timeout: 5
    layers: ["shared-dependencies"]
```

### API_GATEWAY_CONFIGURATION

```typescript
// src/handlers/chatHandler.ts
import { APIGatewayProxyHandlerV2, APIGatewayProxyEventV2 } from 'aws-lambda';
import { validateJWT } from '../auth/jwtValidator';
import { TravelAgentService } from '../application/services/TravelAgentService';
import { Logger } from '@aws-lambda-powertools/logger';

const logger = new Logger();

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    // Validate JWT token from Authorization header
    const user = await validateJWT(event.headers.authorization);
    
    const { message, sessionId } = JSON.parse(event.body || '{}');
    
    const agentService = new TravelAgentService();
    const response = await agentService.processMessage(message, {
      sessionId,
      userId: user.sub,
      userContext: user
    });
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ success: true, data: response })
    };
  } catch (error) {
    logger.error('Chat processing failed', { error });
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: 'Processing failed' })
    };
  }
};
```

## PHASE_6_INFRASTRUCTURE_CODE

### CDK_STACK_ARCHITECTURE

```yaml
stack_composition:
  DatabaseStack:
    resources: [dynamodb_tables, gsi_indexes, backup_config]
  
  AuthStack:
    resources: [cognito_user_pool, cognito_identity_pool, jwt_authorizer]
  
  ComputeStack:
    resources: [lambda_functions, lambda_layers, api_gateway]
  
  AIStack:
    resources: [bedrock_policies, iam_roles, parameter_store]
  
  MonitoringStack:
    resources: [cloudwatch_dashboards, alarms, log_groups]
```

### COMPUTE_STACK_LAMBDA

```typescript
// infrastructure/lib/stacks/ComputeStack.ts
export class ComputeStack extends Stack {
  public readonly api: RestApi;
  public readonly chatFunction: Function;

  constructor(scope: Construct, id: string, props: ComputeStackProps) {
    super(scope, id, props);

    // Lambda Layer for shared dependencies
    const sharedLayer = new LayerVersion(this, 'SharedDependencies', {
      code: Code.fromAsset('layers/shared'),
      compatibleRuntimes: [Runtime.NODEJS_20_X],
      description: 'Shared dependencies for travel agent'
    });

    // Chat Lambda Function
    this.chatFunction = new Function(this, 'ChatHandler', {
      runtime: Runtime.NODEJS_20_X,
      handler: 'chatHandler.handler',
      code: Code.fromAsset('dist/handlers'),
      memorySize: 1024,
      timeout: Duration.seconds(30),
      layers: [sharedLayer],
      environment: {
        DYNAMODB_TABLE_CHAT: props.chatTable.tableName,
        DYNAMODB_TABLE_PROFILES: props.profileTable.tableName,
        BEDROCK_MODEL: 'anthropic.claude-3-sonnet-20240229-v1:0'
      }
    });

    // API Gateway with JWT Authorizer
    this.api = new RestApi(this, 'TravelAgentAPI', {
      restApiName: 'Travel Agent Service',
      description: 'API for travel agent chat service',
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
        allowMethods: Cors.ALL_METHODS,
        allowHeaders: ['Content-Type', 'Authorization']
      }
    });

    // JWT Authorizer
    const authorizer = new RequestAuthorizer(this, 'JWTAuthorizer', {
      handler: new Function(this, 'AuthorizerFunction', {
        runtime: Runtime.NODEJS_20_X,
        handler: 'authorizer.handler',
        code: Code.fromAsset('dist/auth'),
        environment: {
          COGNITO_USER_POOL_ID: props.userPool.userPoolId,
          COGNITO_REGION: Stack.of(this).region
        }
      }),
      identitySources: [IdentitySource.header('Authorization')]
    });

    // API Gateway Resources
    const chatResource = this.api.root.addResource('chat');
    chatResource.addMethod('POST', new LambdaIntegration(this.chatFunction), {
      authorizer: authorizer,
      authorizationType: AuthorizationType.CUSTOM
    });

    const healthResource = this.api.root.addResource('health');
    healthResource.addMethod('GET', new LambdaIntegration(this.createHealthFunction()));
  }
}
```
### AUTH_STACK_COGNITO

```typescript
// infrastructure/lib/stacks/AuthStack.ts
export class AuthStack extends Stack {
  public readonly userPool: UserPool;
  public readonly userPoolClient: UserPoolClient;
  public readonly identityPool: CfnIdentityPool;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Cognito User Pool
    this.userPool = new UserPool(this, 'TravelAgentUserPool', {
      userPoolName: 'travel-agent-users',
      selfSignUpEnabled: true,
      signInAliases: {
        email: true
      },
      autoVerify: {
        email: true
      },
      standardAttributes: {
        fullname: {
          required: true,
          mutable: true
        },
        email: {
          required: true,
          mutable: false
        }
      },
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireDigits: true,
        requireSymbols: false
      },
      accountRecovery: AccountRecovery.EMAIL_ONLY
    });

    // User Pool Client
    this.userPoolClient = new UserPoolClient(this, 'TravelAgentClient', {
      userPool: this.userPool,
      generateSecret: false,
      authFlows: {
        adminUserPassword: true,
        userPassword: true,
        userSrp: true
      },
      oAuth: {
        flows: {
          authorizationCodeGrant: true,
          implicitCodeGrant: true
        },
        scopes: [OAuthScope.EMAIL, OAuthScope.OPENID, OAuthScope.PROFILE],
        callbackUrls: ['http://localhost:3000', 'https://yourdomain.com']
      }
    });

    // Identity Pool for AWS resource access
    this.identityPool = new CfnIdentityPool(this, 'TravelAgentIdentityPool', {
      allowUnauthenticatedIdentities: false,
      cognitoIdentityProviders: [{
        clientId: this.userPoolClient.userPoolClientId,
        providerName: this.userPool.userPoolProviderName
      }]
    });
  }
}
```
      billingMode: BillingMode.PAY_PER_REQUEST,
      pointInTimeRecovery: true,
      encryption: TableEncryption.AWS_MANAGED
    });

    this.userProfileTable = new Table(this, 'UserProfile', {
      tableName: 'travel-agent-user-profiles',
      partitionKey: { name: 'userId', type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      encryption: TableEncryption.AWS_MANAGED
    });
  }
}
```

### 6.3 Compute Stack (Lambda/ECS)
**Option A: Lambda Functions**
```typescript
export class ComputeStack extends Stack {
  constructor(scope: Construct, id: string, props: ComputeStackProps) {
    super(scope, id, props);

    const travelAgentFunction = new NodejsFunction(this, 'TravelAgent', {
      entry: '../src/lambda/handler.ts',
      handler: 'handler',
      runtime: Runtime.NODEJS_20_X,
      timeout: Duration.minutes(5),
      memorySize: 1024,
      environment: {
        CHAT_HISTORY_TABLE: props.chatHistoryTable.tableName,
        USER_PROFILE_TABLE: props.userProfileTable.tableName,
        AWS_REGION: this.region
      }
    });

    props.chatHistoryTable.grantReadWriteData(travelAgentFunction);
  }
}
```

**Option B: ECS Fargate** (Recommended for consistent performance)
```typescript
export class ComputeStack extends Stack {
  constructor(scope: Construct, id: string, props: ComputeStackProps) {
    super(scope, id, props);

    const cluster = new Cluster(this, 'TravelAgentCluster', {
      vpc: props.vpc,
      enableFargateCapacityProviders: true
    });

    const taskDefinition = new FargateTaskDefinition(this, 'TravelAgentTask', {
      memoryLimitMiB: 2048,
      cpu: 1024
    });

    taskDefinition.addContainer('TravelAgentContainer', {
      image: ContainerImage.fromRegistry('travel-agent:latest'),
      environment: {
        NODE_ENV: 'production',
        AWS_REGION: this.region
      },
      logging: LogDriver.awsLogs({
        streamPrefix: 'travel-agent',
        logGroup: new LogGroup(this, 'TravelAgentLogs')
      })
    });
  }
}
```

### 6.4 AI Stack (Bedrock)
```typescript
export class AIStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Bedrock model access (requires service quota increases)
    const bedrockRole = new Role(this, 'BedrockAccessRole', {
      assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName('AmazonBedrockFullAccess')
      ]
    });

    // Parameter Store for model configurations
    new StringParameter(this, 'BedrockChatModel', {
      parameterName: '/travel-agent/bedrock/chat-model',
      stringValue: 'anthropic.claude-3-sonnet-20240229-v1:0'
    });
  }
}
```

---

## Phase 7: Testing & Validation

### 7.1 Unit Testing Strategy
```typescript
// tests/unit/services/TravelAgentService.test.ts
describe('TravelAgentService', () => {
  let service: TravelAgentService;
  let mockChatModel: jest.Mocked<ChatModel>;
  let mockToolRegistry: jest.Mocked<ToolRegistry>;

  beforeEach(() => {
    mockChatModel = createMockChatModel();
    mockToolRegistry = createMockToolRegistry();
    service = new TravelAgentService(mockChatModel, mockToolRegistry);
  });

  it('should process travel inquiry with flight search', async () => {
    // Arrange
    const message = 'Find flights from Sydney to Melbourne on March 15th';
    const context = { sessionId: 'test-session' };
    
    mockToolRegistry.getAvailableTools.mockResolvedValue([flightSearchTool]);
    mockChatModel.invoke.mockResolvedValue(mockFlightResponse);

    // Act
    const result = await service.processMessage(message, context);

    // Assert
    expect(result).toBeDefined();
    expect(result.type).toBe('flight_results');
  });
});
```

### 7.2 Integration Testing
```typescript
// tests/integration/api.test.ts
describe('Travel Agent API Integration', () => {
  let app: FastifyInstance;
  let dynamoContainer: StartedTestContainer;

  beforeAll(async () => {
    dynamoContainer = await new LocalDynamoDBContainer().start();
    app = await createTestApp({
      dynamoEndpoint: dynamoContainer.getConnectionUri()
    });
  });

  it('should handle chat conversation end-to-end', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/api/travel-agent/chat',
      payload: {
        message: 'I want to plan a trip to Sydney',
        sessionId: 'test-session'
      }
    });

    expect(response.statusCode).toBe(200);
    expect(response.json().success).toBe(true);
  });
});
```

---

---

## PHASE_7_AUTHENTICATION_INTEGRATION

### JWT_VALIDATION_MIDDLEWARE

```typescript
// src/auth/jwtValidator.ts
import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-client';
import { Logger } from '@aws-lambda-powertools/logger';

const logger = new Logger();

interface JWTPayload {
  sub: string;
  email: string;
  email_verified: boolean;
  aud: string;
  iss: string;
  exp: number;
  token_use: 'access' | 'id';
}

class JWTValidator {
  private client: jwksClient.JwksClient;
  
  constructor() {
    const cognitoIssuer = `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`;
    
    this.client = jwksClient({
      jwksUri: `${cognitoIssuer}/.well-known/jwks.json`,
      cache: true,
      cacheMaxAge: 86400000 // 24 hours
    });
  }

  async validateToken(authHeader?: string): Promise<JWTPayload> {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('Invalid authorization header');
    }

    const token = authHeader.substring(7);
    const decoded = jwt.decode(token, { complete: true });
    
    if (!decoded || !decoded.header.kid) {
      throw new Error('Invalid token format');
    }

    const key = await this.getSigningKey(decoded.header.kid);
    
    const payload = jwt.verify(token, key, {
      algorithms: ['RS256'],
      audience: process.env.COGNITO_CLIENT_ID,
      issuer: `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`
    }) as JWTPayload;

    if (payload.token_use !== 'access') {
      throw new Error('Token must be an access token');
    }

    return payload;
  }

  private async getSigningKey(kid: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.client.getSigningKey(kid, (err, key) => {
        if (err) {
          logger.error('Error getting signing key', { error: err });
          reject(err);
        } else {
          const signingKey = key?.getPublicKey();
          resolve(signingKey!);
        }
      });
    });
  }
}

export const validateJWT = async (authHeader?: string): Promise<JWTPayload> => {
  const validator = new JWTValidator();
  return validator.validateToken(authHeader);
};
```

### LAMBDA_AUTHORIZER

```typescript
// src/auth/authorizer.ts
import { APIGatewayRequestAuthorizerHandlerV2 } from 'aws-lambda';
import { validateJWT } from './jwtValidator';

export const handler: APIGatewayRequestAuthorizerHandlerV2 = async (event) => {
  try {
    const user = await validateJWT(event.headers.authorization);
    
    return {
      isAuthorized: true,
      context: {
        userId: user.sub,
        email: user.email,
        emailVerified: user.email_verified.toString()
      }
    };
  } catch (error) {
    console.error('Authorization failed:', error);
    return {
      isAuthorized: false
    };
  }
};
```

---

## DEPLOYMENT_STRATEGY_SERVERLESS

### LAMBDA_DEPLOYMENT_PIPELINE

```yaml
deployment_phases:
  build_phase:
    - compile_typescript
    - run_unit_tests
    - bundle_lambda_functions
    - create_lambda_layers
    - validate_cdk_templates
  
  deploy_infrastructure:
    - deploy_auth_stack
    - deploy_database_stack  
    - deploy_ai_stack
    - deploy_compute_stack
    - deploy_monitoring_stack
  
  deploy_application:
    - upload_lambda_layers
    - deploy_lambda_functions
    - update_api_gateway
    - run_integration_tests
  
  traffic_management:
    - weighted_alias_deployment
    - canary_releases
    - gradual_traffic_shift
    - rollback_on_errors

lambda_deployment_config:
  alias_strategy:
    live: "$LATEST"
    staging: "versioned"
  
  canary_config:
    initial_traffic: 10
    increment: 25
    interval: "5m"
    alarm_threshold: 0.01
```

### MONITORING_LAMBDA_SPECIFIC

```yaml
cloudwatch_metrics:
  lambda_metrics:
    - duration
    - error_count
    - invocation_count
    - concurrent_executions
    - throttles
  
  api_gateway_metrics:
    - 4xx_error_rate
    - 5xx_error_rate
    - latency
    - count
  
  dynamodb_metrics:
    - consumed_read_capacity
    - consumed_write_capacity
    - throttled_requests

alarm_thresholds:
  lambda_error_rate: "> 1%"
  lambda_duration: "> 25s"
  api_gateway_latency: "> 2s"
  dynamodb_throttles: "> 0"
```

---

## RISK_MITIGATION_SERVERLESS

### LAMBDA_SPECIFIC_RISKS

```yaml
cold_start_mitigation:
  provisioned_concurrency:
    chat_function: 5
    approval_function: 2
  
  optimization_strategies:
    - minimize_bundle_size
    - lambda_layer_caching
    - connection_pooling
    - lazy_initialization

timeout_management:
  function_timeouts:
    chat_handler: 30s
    approval_handler: 15s
    health_handler: 5s
  
  api_gateway_timeout: 29s
  client_timeout: 25s

memory_optimization:
  chat_function: 1024mb
  approval_function: 512mb
  health_function: 256mb
  
  monitoring:
    - max_memory_used
    - duration_vs_memory
    - cost_optimization_analysis
```

### SUCCESS_CRITERIA_SERVERLESS

```yaml
performance_targets:
  cold_start_latency: "< 1s"
  warm_start_latency: "< 200ms"
  api_gateway_latency: "< 2s"
  
reliability_targets:
  function_error_rate: "< 0.1%"
  api_availability: "> 99.9%"
  concurrent_execution_limit: "1000"
  
cost_targets:
  lambda_cost_reduction: "40%"
  total_infrastructure_cost: "30%"
  pay_per_use_efficiency: "optimized"
```

---

## OIDC_AUTHENTICATION_FLOW

### FRONTEND_INTEGRATION

```typescript
// Frontend authentication configuration for Cognito
export const authConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
      userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID,
      loginWith: {
        oauth: {
          domain: `${process.env.NEXT_PUBLIC_USER_POOL_DOMAIN}.auth.${process.env.NEXT_PUBLIC_AWS_REGION}.amazoncognito.com`,
          scopes: ['email', 'openid', 'profile'],
          redirectSignIn: ['http://localhost:3000/', 'https://yourdomain.com/'],
          redirectSignOut: ['http://localhost:3000/', 'https://yourdomain.com/'],
          responseType: 'code'
        },
        email: true
      }
    }
  }
};
```

This updated migration plan now includes:

1. **Lambda Functions** instead of ECS Fargate
2. **API Gateway** with OIDC/JWT authentication
3. **Cognito User Pool** for user management
4. **JWT validation middleware** for securing Lambda functions
5. **Lambda-specific monitoring** and deployment strategies
6. **Serverless-optimized** cold start mitigation
7. **Cost optimization** through pay-per-use model

The architecture is now fully serverless and follows AWS best practices for Lambda-based applications with proper OIDC authentication.
# .github/workflows/deploy.yml
name: Deploy Travel Agent
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm run test:ci
        
      - name: Build application
        run: npm run build
        
      - name: Deploy CDK
        run: |
          cd infrastructure
          npm run cdk deploy --all --require-approval never
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

### 8.2 Data Migration Strategy
1. **Dual-write period**: Write to both CosmosDB and DynamoDB
2. **Background migration**: Migrate historical data using AWS DataSync
3. **Validation**: Compare data consistency between systems
4. **Switch-over**: Route traffic to new system
5. **Cleanup**: Remove old Azure resources

---

## Technology Mapping Summary

| Component | Current (Azure/.NET) | Target (AWS/Node.js) |
|-----------|---------------------|---------------------|
| **Runtime** | .NET 10 | Node.js 20 LTS |
| **Language** | C# | TypeScript |
| **Web Framework** | ASP.NET Core | Fastify |
| **AI Platform** | Azure AI Foundry | AWS Bedrock |
| **LLM Models** | GPT-4o | Claude-3 Sonnet |
| **Embeddings** | text-embedding-ada-002 | Amazon Titan Embeddings |
| **Database** | Azure CosmosDB | Amazon DynamoDB |
| **Hosting** | Azure App Service | AWS ECS Fargate |
| **Infrastructure** | Azure Bicep | AWS CDK (TypeScript) |
| **Monitoring** | Application Insights | CloudWatch + X-Ray |
| **Agent Framework** | Microsoft Agent Framework | LangChain |

---

## Execution Timeline

### Week 1-2: Foundation
- [ ] Phase 1: Project setup and architecture foundation
- [ ] Phase 2: Domain models and core business logic migration

### Week 3-4: Infrastructure
- [ ] Phase 3: Data layer and repository adapters
- [ ] Phase 6: CDK infrastructure setup

### Week 5-6: AI & Services  
- [ ] Phase 4: AI services and agent framework migration
- [ ] Phase 5: API layer and controllers

### Week 7-8: Testing & Deployment
- [ ] Phase 7: Comprehensive testing suite
- [ ] Phase 8: CI/CD and deployment automation

### Week 9-10: Migration & Validation
- [ ] Data migration execution
- [ ] Performance testing and optimization
- [ ] Production deployment and monitoring

---

## Success Criteria

### Technical Objectives
- ✅ Hexagonal architecture implementation
- ✅ 100% API compatibility with frontend
- ✅ < 200ms response time for chat interactions
- ✅ 99.9% uptime SLA
- ✅ Zero data loss during migration

### Business Objectives  
- ✅ Maintain all current travel agent functionality
- ✅ Preserve conversation history and user profiles
- ✅ Support same AI capabilities and tool integrations
- ✅ Enable easier future hosting platform changes

---

## Risk Mitigation

### High Risk Items
1. **AI Model Compatibility** - Extensive testing of Claude vs GPT-4o responses
2. **Data Migration** - Comprehensive backup and rollback procedures
3. **Performance** - Load testing with realistic traffic patterns
4. **Dependencies** - Lock specific versions, maintain security updates

### Rollback Strategy
- Blue-green deployment with instant traffic switching
- Data synchronization during transition period
- Automated rollback triggers based on error rates
- 24/7 monitoring during migration window

---

## Post-Migration Optimizations

### Performance Enhancements
- **Caching**: Redis for conversation context and user preferences
- **CDN**: CloudFront for static assets and API responses
- **Auto-scaling**: ECS tasks based on CPU/memory metrics
- **Database**: DynamoDB Global Secondary Indexes for query optimization

### Cost Optimization
- **Reserved Instances**: For predictable workloads
- **Spot Instances**: For batch processing tasks
- **DynamoDB On-Demand**: Pay per actual usage
- **Lambda**: For infrequent background tasks

This migration plan provides a structured approach to transitioning from Azure/.NET to AWS/Node.js while implementing hexagonal architecture principles that will enable future platform changes with minimal business logic impact.