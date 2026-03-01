# MIGRATION_EXECUTION_CHECKLIST

## CURRENT_PROGRESS_SNAPSHOT

- Last updated: 2026-02-28
- Overall status: In progress

| Phase | Status | Notes |
|---|---|---|
| Phase 1 - Architecture Foundation | completed | Node.js backend structure, TS config, dependency setup, Vitest baseline are in place. |
| Phase 2 - Domain Migration | completed | Core domain models, interfaces, and travel domain service implementation are present. |
| Phase 3 - Infrastructure Data | completed | DynamoDB repository adapters and AWS config wiring are implemented. |
| Phase 4 - AI Agent Services | in_progress | Bedrock service, agent, and flight tool wiring implemented; response-quality parity validation still pending. |
| Phase 5 - Lambda API Layer | completed | Chat/approval handlers, JWT middleware/authorizer, and handler integration tests are implemented. |
| Phase 6 - Infrastructure as Code | in_progress | Initial AWS CDK app scaffold and Database/Auth/Compute stack skeletons are created under infrastructure/. |
| Phase 7 - Authentication Integration | pending | Full Cognito OIDC flow and frontend auth integration pending. |
| Phase 8 - Testing Quality | in_progress | Node backend unit/integration tests pass; broader coverage/performance/security targets pending. |
| Phase 9 - Deployment Migration | pending | CI/CD and production cutover workflows pending. |

## PRE_MIGRATION_SETUP
```yaml
prerequisites:
  - action: create_migration_branch
    command: "git checkout -b feature/migrate-to-nodejs-aws"
    status: pending
  
  - action: review_current_architecture
    tasks: [analyze_dependencies, document_apis, map_database_schema]
    status: pending
  
  - action: setup_aws_account
    tasks: [configure_credentials, request_service_quotas, enable_bedrock_models]
    status: pending
  
  - action: development_environment
    requirements: [nodejs_20_lts, aws_cli_v2, cdk_v2, docker]
    status: pending
```

## PHASE_1_ARCHITECTURE_FOUNDATION
```yaml
duration: "1_week"
deliverables:
  project_structure:
    - action: create_hexagonal_architecture
      command: "mkdir -p src/nodejs-backend/{src/{domain,application,infrastructure,presentation},tests,scripts}"
      status: pending
  
  typescript_configuration:
    - action: setup_strict_typescript
      files: ["tsconfig.json", "tsconfig.build.json", ".eslintrc.js"]
      status: pending
  
  dependency_management:
    - action: install_core_packages
      packages: ["@aws-sdk", "langchain", "@aws-lambda-powertools", "jsonwebtoken"]
      status: pending
  
  testing_framework:
    - action: configure_vitest
      files: ["vitest.config.ts", "jest.config.js"]
      status: pending
```

## PHASE_2_DOMAIN_MIGRATION
```yaml
duration: "1_week" 
dependencies: [phase_1_foundation]
deliverables:
  entity_migration:
    - action: migrate_travel_config
      source: "src/backend/Models/ContosoTravelAppConfig.cs"
      target: "src/domain/models/TravelConfig.ts"
      status: pending
    
    - action: migrate_travel_models
      source: "src/backend/Models/TravelModels.cs"
      target: "src/domain/entities/TravelEntities.ts"
      status: pending
    
    - action: migrate_user_profile
      source: "src/backend/Models/UserProfileMemory.cs"
      target: "src/domain/entities/UserProfile.ts"
      status: pending
  
  interface_definition:
    - action: create_repository_ports
      files: ["UserProfileRepository.ts", "ChatHistoryRepository.ts", "FlightSearchService.ts"]
      status: pending
  
  business_rules:
    - action: implement_domain_services
      scope: ["validation_rules", "business_logic", "domain_events"]
      status: pending
    
    - action: create_unit_tests
      coverage_target: "> 90%"
      status: pending
```

## PHASE_3_INFRASTRUCTURE_DATA
```yaml
duration: "2_weeks"
dependencies: [phase_2_domain]
deliverables:
  database_design:
    - action: create_dynamodb_schemas
      tables: ["chat_history", "user_profiles", "flights_data"]
      status: pending
    
    - action: implement_repository_adapters
      classes: ["DynamoDBChatHistoryRepository", "DynamoDBUserProfileRepository"]
      status: pending
  
  aws_services:
    - action: configure_aws_clients
      services: ["dynamodb", "bedrock", "parameter_store"]
      status: pending
    
    - action: setup_configuration_management
      source: "parameter_store"
      status: pending
  
  monitoring:
    - action: implement_cloudwatch_logging
      framework: "@aws-lambda-powertools/logger"
      status: pending
    
    - action: data_migration_scripts
      source: "cosmosdb"
      target: "dynamodb"
      status: pending
```

## PHASE_4_AI_AGENT_SERVICES
```yaml
duration: "2_weeks"
dependencies: [phase_3_infrastructure]
deliverables:
  ai_service_migration:
    - action: setup_bedrock_client
      model: "anthropic.claude-3-sonnet-20240229-v1:0"
      status: pending
    
    - action: migrate_agent_logic
      framework: "langchain_typescript"
      target: "src/application/agents/TravelAgentFactory.ts"
      status: pending
  
  tool_migration:
    - action: port_flight_finder
      source: "src/backend/Tools/FlightFinderTool.cs"
      target: "src/infrastructure/tools/FlightFinderTool.ts"
      status: pending
    
    - action: port_datetime_tools
      source: "src/backend/Tools/DateTimeTool.cs"
      target: "src/infrastructure/tools/DateTimeTool.ts"
      status: pending
  
  conversation_management:
    - action: implement_memory_management
      scope: ["conversation_context", "user_preferences", "session_state"]
      status: pending
    
    - action: validate_ai_responses
      comparison: "vs_current_system"
      status: pending
```

## PHASE_5_LAMBDA_API_LAYER
```yaml
duration: "1.5_weeks"
dependencies: [phase_4_ai_services]
deliverables:
  lambda_handlers:
    - action: implement_chat_handler
      file: "src/handlers/chatHandler.ts"
      runtime: "nodejs20.x"
      memory: "1024mb"
      timeout: "30s"
      status: pending
    
    - action: implement_approval_handler
      file: "src/handlers/approvalHandler.ts"
      runtime: "nodejs20.x"
      memory: "512mb"
      status: pending
  
  authentication:
    - action: setup_jwt_validation
      file: "src/auth/jwtValidator.ts"
      provider: "cognito_user_pool"
      status: pending
    
    - action: create_lambda_authorizer
      file: "src/auth/authorizer.ts"
      type: "request_authorizer"
      status: pending
  
  api_testing:
    - action: create_integration_tests
      scope: ["authenticated_endpoints", "error_handling", "response_validation"]
      status: pending
```

## PHASE_6_INFRASTRUCTURE_AS_CODE
```yaml
duration: "1_week"
dependencies: [phase_5_lambda_api_layer]
deliverables:
  cdk_stacks:
    - action: create_database_stack
      resources: ["dynamodb_tables", "gsi_indexes", "backup_policies"]
      file: "infrastructure/lib/stacks/DatabaseStack.ts"
      status: pending
    
    - action: create_auth_stack
      resources: ["cognito_user_pool", "cognito_client", "identity_pool"]
      file: "infrastructure/lib/stacks/AuthStack.ts"
      status: pending
    
    - action: create_compute_stack
      resources: ["lambda_functions", "api_gateway", "lambda_layers"]
      file: "infrastructure/lib/stacks/ComputeStack.ts"
      status: pending
  
  deployment_configuration:
    - action: configure_staging_environment
      command: "cdk deploy --profile staging"
      status: pending
    
    - action: setup_environment_configs
      environments: ["dev", "staging", "prod"]
      status: pending
```

## PHASE_7_AUTHENTICATION_INTEGRATION  
```yaml
duration: "3_days"
dependencies: [phase_6_infrastructure_as_code]
deliverables:
  oidc_setup:
    - action: configure_cognito_oidc
      provider: "cognito_user_pool"
      flows: ["authorization_code", "implicit"]
      scopes: ["email", "openid", "profile"]
      status: pending
  
  jwt_middleware:
    - action: implement_token_validation
      file: "src/auth/jwtValidator.ts"
      algorithms: ["RS256"]
      status: pending
    
    - action: create_user_context_extraction
      scope: ["user_id", "email", "permissions"]
      status: pending
  
  frontend_integration:
    - action: update_amplify_config
      file: "amplify-config.ts"
      auth_provider: "cognito"
      status: pending
```

## PHASE_8_TESTING_QUALITY
```yaml
duration: "1_week"
dependencies: [phase_7_authentication_integration]
deliverables:
  test_coverage:
    - action: achieve_unit_test_coverage
      target: "> 90%"
      scope: ["domain_layer", "application_services", "lambda_handlers"]
      status: pending
    
    - action: write_integration_tests
      scope: ["dynamodb_operations", "bedrock_calls", "auth_flow"]
      status: pending
  
  performance_testing:
    - action: lambda_load_testing
      tools: ["artillery", "aws_lambda_power_tuning"]
      targets: ["cold_start < 1s", "warm_start < 200ms"]
      status: pending
    
    - action: api_gateway_testing
      scope: ["rate_limiting", "cors", "authentication"]
      status: pending
  
  security_validation:
    - action: vulnerability_scanning
      tools: ["npm_audit", "snyk", "cdk_nag"]
      status: pending
    
    - action: test_data_migration
      validation: ["data_integrity", "performance", "rollback"]
      status: pending
```

## PHASE_9_DEPLOYMENT_MIGRATION
```yaml
duration: "2_weeks"
dependencies: [phase_8_testing_quality]
deliverables:
  cicd_pipeline:
    - action: setup_github_actions
      workflows: ["build", "test", "deploy", "rollback"]
      status: pending
    
    - action: configure_lambda_deployment
      strategy: "blue_green_with_canary"
      traffic_split: ["10%", "50%", "100%"]
      status: pending
  
  migration_execution:
    - action: deploy_to_staging
      validation: ["functional_tests", "performance_benchmarks"]
      status: pending
    
    - action: execute_data_migration
      strategy: "dual_write_gradual_cutover"
      monitoring: ["error_rates", "latency", "consistency"]
      status: pending
  
  production_deployment:
    - action: canary_release
      initial_traffic: "10%"
      monitoring_period: "24h"
      status: pending
    
    - action: full_traffic_switch
      condition: "error_rate < 0.1%"
      rollback_plan: "automated_on_threshold"
      status: pending
```

## POST_MIGRATION_TASKS
```yaml
duration: "1_week"
dependencies: [phase_9_deployment_migration]
deliverables:
  system_validation:
    - action: complete_traffic_migration
      target: "100%_to_aws_lambda"
      monitoring_period: "72h"
      status: pending
    
    - action: validate_functionality
      scope: ["all_features", "integrations", "performance"]
      status: pending
  
  cleanup_operations:
    - action: azure_resource_cleanup
      condition: "after_30_day_validation_period"
      resources: ["app_services", "cosmosdb", "ai_foundry"]
      status: pending
  
  documentation_update:
    - action: update_technical_docs
      scope: ["api_documentation", "architecture_diagrams", "runbooks"]
      status: pending
    
    - action: create_operational_procedures
      scope: ["monitoring", "alerting", "incident_response"]
      status: pending
  
  knowledge_transfer:
    - action: conduct_post_migration_review
      participants: ["dev_team", "ops_team", "stakeholders"]
      status: pending
    
    - action: plan_cost_optimization
      scope: ["lambda_right_sizing", "dynamodb_optimization", "monitoring_cost"]
      status: pending
```

## CRITICAL_DECISION_POINTS
```yaml
validation_gates:
  week_2:
    checkpoint: "domain_model_migration_completeness"
    criteria: ["100%_entities_migrated", "business_rules_validated", "unit_tests_passing"]
    
  week_4:
    checkpoint: "ai_model_response_quality"
    criteria: ["response_accuracy >= baseline", "latency < 5s", "tool_execution_success > 95%"]
    
  week_6:
    checkpoint: "api_compatibility_validation"
    criteria: ["frontend_integration_tests_pass", "auth_flow_validated", "error_handling_complete"]
    
  week_8:
    checkpoint: "performance_benchmarks_validation"
    criteria: ["lambda_cold_start < 1s", "api_latency < 2s", "throughput >= current"]
    
  week_9:
    checkpoint: "data_migration_validation"
    criteria: ["data_integrity_100%", "migration_rollback_tested", "dual_write_validated"]
    
  week_10:
    checkpoint: "production_migration_go_no_go"
    criteria: ["all_tests_passing", "monitoring_configured", "rollback_procedures_validated"]
```

## Risk Monitoring
- [ ] AI response quality regression monitoring
- [ ] Performance degradation tracking
- [ ] Data consistency validation between CosmosDB and DynamoDB
- [ ] Frontend compatibility testing
- [ ] Cost tracking vs Azure baseline

## Success Metrics
- [ ] 100% API compatibility with existing frontend
- [ ] <200ms average response time for chat interactions
- [ ] Zero data loss during migration
- [ ] 99.9% uptime SLA maintained
- [ ] Cost neutral or improved vs Azure implementation

---

## Quick Start Commands

### Development Setup
```bash
# 1. Switch to migration branch
git checkout feature/migrate-to-nodejs-aws

# 2. Create Node.js backend structure  
mkdir -p src/nodejs-backend
cd src/nodejs-backend
npm init -y
npm install typescript @types/node tsx vitest

# 3. Install core dependencies
npm install fastify @fastify/cors @fastify/swagger
npm install @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb
npm install @aws-sdk/client-bedrock @aws-sdk/client-bedrock-runtime
npm install langchain @langchain/aws inversify reflect-metadata
npm install zod pino @opentelemetry/api

# 4. Install dev dependencies
npm install -D @types/jest eslint @typescript-eslint/eslint-plugin
npm install -D testcontainers @testcontainers/localstack
```

### CDK Setup
```bash
# 1. Create infrastructure project
mkdir -p infrastructure
cd infrastructure
npx cdk init app --language typescript

# 2. Install CDK dependencies  
npm install @aws-cdk/aws-dynamodb @aws-cdk/aws-ecs
npm install @aws-cdk/aws-lambda @aws-cdk/aws-iam
npm install @aws-cdk/aws-logs @aws-cdk/aws-ssm
```

### Testing Setup
```bash
# Run unit tests
npm run test:unit

# Run integration tests (requires Docker)
npm run test:integration

# Run e2e tests
npm run test:e2e

# Run all tests with coverage
npm run test:coverage
```