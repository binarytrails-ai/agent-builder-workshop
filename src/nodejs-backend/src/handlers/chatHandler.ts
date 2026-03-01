import type { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import type { Container } from 'inversify'
import { container as containerPromise } from '@infrastructure/config/container'
import { TYPES } from '@infrastructure/config/types'
import { validateJWT } from '@auth/jwtValidator'
import { TravelAgentService } from '@application/services/TravelAgentService'

interface ChatRequestBody {
  message: string
  sessionId: string
}

function jsonResponse(statusCode: number, body: unknown) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(body)
  }
}

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const user = await validateJWT(event.headers?.['authorization'])

    if (!event.body) {
      return jsonResponse(400, { success: false, error: 'Request body is required' })
    }

    const parsed = JSON.parse(event.body) as Partial<ChatRequestBody>
    if (!parsed.message || !parsed.sessionId) {
      return jsonResponse(400, { success: false, error: 'message and sessionId are required' })
    }

    const container = await containerPromise as Container
    const travelAgentService = container.get<TravelAgentService>(TYPES.TravelAgentService)

    const result = await travelAgentService.processMessage(parsed.sessionId, user.sub, parsed.message)
    return jsonResponse(result.success ? 200 : 500, result)
  } catch (error) {
    return jsonResponse(401, {
      success: false,
      error: error instanceof Error ? error.message : 'Unauthorized'
    })
  }
}
