import type { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import type { Container } from 'inversify'
import { container as containerPromise } from '@infrastructure/config/container'
import { TYPES } from '@infrastructure/config/types'
import { validateJWT } from '@auth/jwtValidator'
import { TravelAgentService, type ApprovalDecision } from '@application/services/TravelAgentService'

interface ApprovalRequestBody {
  approvalId: string
  status: 'approved' | 'rejected'
  comments?: string
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

    const parsed = JSON.parse(event.body) as Partial<ApprovalRequestBody>
    if (!parsed.approvalId || !parsed.status) {
      return jsonResponse(400, { success: false, error: 'approvalId and status are required' })
    }

    const decision: ApprovalDecision = {
      status: parsed.status,
      reviewerId: user.sub,
      ...(parsed.comments ? { comments: parsed.comments } : {})
    }

    const container = await containerPromise as Container
    const travelAgentService = container.get<TravelAgentService>(TYPES.TravelAgentService)

    const result = await travelAgentService.handleApprovalResponse(parsed.approvalId, decision)
    return jsonResponse(result.success ? 200 : 400, result)
  } catch (error) {
    return jsonResponse(401, {
      success: false,
      error: error instanceof Error ? error.message : 'Unauthorized'
    })
  }
}
