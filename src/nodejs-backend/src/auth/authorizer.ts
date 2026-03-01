import type { APIGatewayRequestSimpleAuthorizerHandlerV2 } from 'aws-lambda'
import { validateJWT } from './jwtValidator'

export const handler: APIGatewayRequestSimpleAuthorizerHandlerV2 = async (event) => {
  try {
    const user = await validateJWT(event.headers?.['authorization'])

    return {
      isAuthorized: true,
      context: {
        userId: user.sub,
        ...(user.email ? { email: user.email } : {}),
        ...(user.scope ? { scope: user.scope } : {})
      }
    }
  } catch {
    return {
      isAuthorized: false
    }
  }
}
