import { Stack, StackProps } from 'aws-cdk-lib'
import { AccountRecovery, UserPool, UserPoolClient } from 'aws-cdk-lib/aws-cognito'
import { Construct } from 'constructs'

export class AuthStack extends Stack {
  public readonly userPool: UserPool
  public readonly userPoolClient: UserPoolClient

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    this.userPool = new UserPool(this, 'TravelAgentUserPool', {
      userPoolName: 'contoso-travel-users',
      selfSignUpEnabled: true,
      signInAliases: { email: true },
      autoVerify: { email: true },
      accountRecovery: AccountRecovery.EMAIL_ONLY
    })

    this.userPoolClient = new UserPoolClient(this, 'TravelAgentUserPoolClient', {
      userPool: this.userPool,
      generateSecret: false,
      authFlows: {
        userSrp: true,
        userPassword: true
      }
    })
  }
}
