import jwt, { type JwtPayload } from 'jsonwebtoken'

export interface AuthUser {
  sub: string
  email?: string
  scope?: string
}

export async function validateJWT(authorizationHeader?: string): Promise<AuthUser> {
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    throw new Error('Missing or invalid Authorization header')
  }

  const token = authorizationHeader.slice('Bearer '.length).trim()
  const secret = process.env['JWT_SECRET']

  if (!secret) {
    throw new Error('JWT_SECRET is not configured')
  }

  const payload = jwt.verify(token, secret) as JwtPayload
  const subject = payload.sub

  if (!subject) {
    throw new Error('Token missing subject')
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
