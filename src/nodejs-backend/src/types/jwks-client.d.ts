declare module 'jwks-client' {
  export interface SigningKey {
    getPublicKey(): string
    publicKey?: string
    rsaPublicKey?: string
  }

  export interface JwksClient {
    getSigningKey(kid: string): Promise<SigningKey>
  }

  export interface JwksClientOptions {
    jwksUri: string
    cache?: boolean
    cacheMaxAge?: number
    rateLimit?: boolean
    jwksRequestsPerMinute?: number
    timeout?: number
  }

  export default function createJwksClient(options: JwksClientOptions): JwksClient
}
