import jwt, { type JwtPayload } from 'jsonwebtoken'
import createJwksClient from 'jwks-client'

export interface AuthUser {
  sub: string
  email?: string
  scope?: string
}

interface VerifiedJwtPayload extends JwtPayload {
  token_use?: 'access' | 'id'
  client_id?: string
}

let jwksClientInstance: ReturnType<typeof createJwksClient> | null = null

function getRequiredEnv(name: 'AWS_REGION' | 'COGNITO_USER_POOL_ID' | 'COGNITO_USER_POOL_CLIENT_ID'): string {
  const value = process.env[name]
  if (!value || value.trim().length === 0) {
    throw new Error(`${name} is not configured`)
  }
  return value
}

function getCognitoIssuer(): string {
  const region = getRequiredEnv('AWS_REGION')
  const userPoolId = getRequiredEnv('COGNITO_USER_POOL_ID')
  return `https://cognito-idp.${region}.amazonaws.com/${userPoolId}`
}

function getExpectedClientId(): string {
  return getRequiredEnv('COGNITO_USER_POOL_CLIENT_ID')
}

function getJwksClient(): ReturnType<typeof createJwksClient> {
  if (jwksClientInstance) {
    return jwksClientInstance
  }

  jwksClientInstance = createJwksClient({
    jwksUri: `${getCognitoIssuer()}/.well-known/jwks.json`,
    cache: true,
    cacheMaxAge: 10 * 60 * 1000,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    timeout: 30000
  })

  return jwksClientInstance
}

async function getSigningKeyFromToken(token: string): Promise<string> {
  const decoded = jwt.decode(token, { complete: true })
  if (!decoded || typeof decoded === 'string') {
    throw new Error('Invalid JWT format')
  }

  const alg = decoded.header.alg
  if (alg !== 'RS256') {
    throw new Error('Unsupported JWT signing algorithm')
  }

  const keyId = decoded.header.kid
  if (!keyId) {
    throw new Error('JWT missing key identifier (kid)')
  }

  const key = await getJwksClient().getSigningKey(keyId)
  const publicKey = key.getPublicKey()
  if (!publicKey) {
    throw new Error('Unable to resolve JWT signing key')
  }

  return publicKey
}

export async function validateJWT(authorizationHeader?: string): Promise<AuthUser> {
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    throw new Error('Missing or invalid Authorization header')
  }

  const token = authorizationHeader.slice('Bearer '.length).trim()
  const signingKey = await getSigningKeyFromToken(token)
  const payload = jwt.verify(token, signingKey, {
    algorithms: ['RS256'],
    issuer: getCognitoIssuer(),
    ignoreExpiration: false
  }) as VerifiedJwtPayload
  const subject = payload.sub

  if (!subject) {
    throw new Error('Token missing subject')
  }

  const expectedClientId = getExpectedClientId()
  const audienceMatch = payload.aud === expectedClientId || payload.client_id === expectedClientId
  if (!audienceMatch) {
    throw new Error('Token audience/client mismatch')
  }

  if (payload.token_use && payload.token_use !== 'access') {
    throw new Error('Token must be an access token')
  }

  const emailClaim = payload['email']
  const scopeClaim = payload['scope']
  const email = typeof emailClaim === 'string' ? emailClaim : undefined
  const scope = typeof scopeClaim === 'string' ? scopeClaim : undefined

  return {
    sub: subject,
    ...(email ? { email } : {}),
    ...(scope ? { scope } : {})
  }
}
