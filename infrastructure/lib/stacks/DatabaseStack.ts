import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib'
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb'
import { Construct } from 'constructs'

export class DatabaseStack extends Stack {
  public readonly chatHistoryTable: Table
  public readonly userProfileTable: Table
  public readonly flightsTable: Table

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    this.chatHistoryTable = new Table(this, 'ChatHistoryTable', {
      tableName: 'contoso-travel-chat-history',
      partitionKey: { name: 'sessionId', type: AttributeType.STRING },
      sortKey: { name: 'timestamp', type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.DESTROY
    })

    this.userProfileTable = new Table(this, 'UserProfileTable', {
      tableName: 'contoso-travel-user-profiles',
      partitionKey: { name: 'userId', type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.DESTROY
    })

    this.flightsTable = new Table(this, 'FlightsTable', {
      tableName: 'contoso-travel-flights',
      partitionKey: { name: 'routeId', type: AttributeType.STRING },
      sortKey: { name: 'flightDate', type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.DESTROY
    })

    this.userProfileTable.addGlobalSecondaryIndex({
      indexName: 'email-index',
      partitionKey: { name: 'email', type: AttributeType.STRING }
    })

    this.flightsTable.addGlobalSecondaryIndex({
      indexName: 'flightId-index',
      partitionKey: { name: 'flightId', type: AttributeType.STRING }
    })
  }
}
