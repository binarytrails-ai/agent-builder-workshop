import 'reflect-metadata'

if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = 'test-jwt-secret-value'
}

if (!process.env.COGNITO_USER_POOL_ID) {
  process.env.COGNITO_USER_POOL_ID = 'us-east-1_testpool'
}

if (!process.env.COGNITO_USER_POOL_CLIENT_ID) {
  process.env.COGNITO_USER_POOL_CLIENT_ID = 'test-client-id'
}

if (!process.env.AWS_REGION) {
  process.env.AWS_REGION = 'us-east-1'
}

// Global test setup
beforeEach(() => {
  // Reset any global state before each test
})

afterEach(() => {
  // Clean up after each test
})