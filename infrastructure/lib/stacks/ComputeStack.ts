import { Stack, StackProps } from 'aws-cdk-lib'
import { UserPool, UserPoolClient } from 'aws-cdk-lib/aws-cognito'
import { HttpApi, HttpMethod } from 'aws-cdk-lib/aws-apigatewayv2'
import { HttpLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations'
import { HttpJwtAuthorizer } from 'aws-cdk-lib/aws-apigatewayv2-authorizers'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import { Runtime } from 'aws-cdk-lib/aws-lambda'
import { Table } from 'aws-cdk-lib/aws-dynamodb'
import { Construct } from 'constructs'
import path from 'path'

export interface ComputeStackProps extends StackProps {
  chatHistoryTable: Table
  userProfileTable: Table
  flightsTable: Table
  userPool: UserPool
  userPoolClient: UserPoolClient
}

export class ComputeStack extends Stack {
  public readonly api: HttpApi

  constructor(scope: Construct, id: string, props: ComputeStackProps) {
    super(scope, id, props)

    const nodeBackendRoot = path.resolve(__dirname, '../../../src/nodejs-backend')
    const depsLockFilePath = path.join(nodeBackendRoot, 'package-lock.json')
    const chatHandlerEntry = path.resolve(__dirname, '../../../src/nodejs-backend/src/handlers/chatHandler.ts')
    const approvalHandlerEntry = path.resolve(__dirname, '../../../src/nodejs-backend/src/handlers/approvalHandler.ts')

    const chatHandler = new NodejsFunction(this, 'ChatHandler', {
      entry: chatHandlerEntry,
      depsLockFilePath,
      handler: 'handler',
      runtime: Runtime.NODEJS_20_X,
      environment: {
        DYNAMODB_CHAT_HISTORY_TABLE: props.chatHistoryTable.tableName,
        DYNAMODB_USER_PROFILE_TABLE: props.userProfileTable.tableName,
        DYNAMODB_FLIGHTS_TABLE: props.flightsTable.tableName,
        COGNITO_USER_POOL_ID: props.userPool.userPoolId,
        COGNITO_USER_POOL_CLIENT_ID: props.userPoolClient.userPoolClientId
      }
    })

    const approvalHandler = new NodejsFunction(this, 'ApprovalHandler', {
      entry: approvalHandlerEntry,
      depsLockFilePath,
      handler: 'handler',
      runtime: Runtime.NODEJS_20_X,
      environment: {
        DYNAMODB_CHAT_HISTORY_TABLE: props.chatHistoryTable.tableName,
        DYNAMODB_USER_PROFILE_TABLE: props.userProfileTable.tableName,
        DYNAMODB_FLIGHTS_TABLE: props.flightsTable.tableName,
        COGNITO_USER_POOL_ID: props.userPool.userPoolId,
        COGNITO_USER_POOL_CLIENT_ID: props.userPoolClient.userPoolClientId
      }
    })

    props.chatHistoryTable.grantReadWriteData(chatHandler)
    props.userProfileTable.grantReadWriteData(chatHandler)
    props.flightsTable.grantReadWriteData(chatHandler)

    props.chatHistoryTable.grantReadWriteData(approvalHandler)
    props.userProfileTable.grantReadWriteData(approvalHandler)
    props.flightsTable.grantReadWriteData(approvalHandler)

    this.api = new HttpApi(this, 'TravelAgentApi', {
      apiName: 'contoso-travel-agent-api'
    })

    const issuer = `https://cognito-idp.${this.region}.amazonaws.com/${props.userPool.userPoolId}`
    const jwtAuthorizer = new HttpJwtAuthorizer('CognitoJwtAuthorizer', issuer, {
      jwtAudience: [props.userPoolClient.userPoolClientId]
    })

    this.api.addRoutes({
      path: '/chat',
      methods: [HttpMethod.POST],
      integration: new HttpLambdaIntegration('ChatIntegration', chatHandler),
      authorizer: jwtAuthorizer
    })

    this.api.addRoutes({
      path: '/approval',
      methods: [HttpMethod.POST],
      integration: new HttpLambdaIntegration('ApprovalIntegration', approvalHandler),
      authorizer: jwtAuthorizer
    })
  }
}
