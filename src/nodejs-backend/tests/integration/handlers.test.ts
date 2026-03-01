import { beforeEach, describe, expect, it, vi } from 'vitest'

function getStatusCode(response: unknown): number | undefined {
  if (response && typeof response === 'object' && 'statusCode' in response) {
    const candidate = (response as { statusCode?: unknown }).statusCode
    if (typeof candidate === 'number') {
      return candidate
    }
  }

  return undefined
}

const mockValidateJWT = vi.fn()
const mockProcessMessage = vi.fn()
const mockHandleApprovalResponse = vi.fn()

vi.mock('@auth/jwtValidator', () => ({
  validateJWT: (...args: unknown[]) => mockValidateJWT(...args)
}))

vi.mock('@infrastructure/config/container', () => ({
  container: Promise.resolve({
    get: () => ({
      processMessage: (...args: unknown[]) => mockProcessMessage(...args),
      handleApprovalResponse: (...args: unknown[]) => mockHandleApprovalResponse(...args)
    })
  })
}))

vi.mock('@infrastructure/config/types', () => ({
  TYPES: {
    TravelAgentService: Symbol.for('TravelAgentService')
  }
}))

import { handler as chatHandler } from '@handlers/chatHandler'
import { handler as approvalHandler } from '@handlers/approvalHandler'

describe('Lambda handlers integration', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockValidateJWT.mockResolvedValue({ sub: 'user-123' })
  })

  describe('chatHandler', () => {
    it('returns 200 for authenticated valid request', async () => {
      mockProcessMessage.mockResolvedValue({
        success: true,
        data: { message: 'hello' }
      })

      const response = await chatHandler({
        headers: { authorization: 'Bearer token' },
        body: JSON.stringify({ message: 'Find flights', sessionId: 'session-1' })
      } as any, {} as any, () => {})

      expect(getStatusCode(response)).toBe(200)
      expect(mockProcessMessage).toHaveBeenCalledWith('session-1', 'user-123', 'Find flights')
    })

    it('returns 400 when body missing', async () => {
      const response = await chatHandler({
        headers: { authorization: 'Bearer token' }
      } as any, {} as any, () => {})

      expect(getStatusCode(response)).toBe(400)
    })

    it('returns 400 when required fields are missing', async () => {
      const response = await chatHandler({
        headers: { authorization: 'Bearer token' },
        body: JSON.stringify({ message: 'Hi' })
      } as any, {} as any, () => {})

      expect(getStatusCode(response)).toBe(400)
    })

    it('returns 401 when auth fails', async () => {
      mockValidateJWT.mockRejectedValue(new Error('invalid token'))

      const response = await chatHandler({
        headers: { authorization: 'Bearer invalid' },
        body: JSON.stringify({ message: 'Find flights', sessionId: 'session-1' })
      } as any, {} as any, () => {})

      expect(getStatusCode(response)).toBe(401)
    })

    it('returns 500 when service returns unsuccessful result', async () => {
      mockProcessMessage.mockResolvedValue({
        success: false,
        error: 'service failed'
      })

      const response = await chatHandler({
        headers: { authorization: 'Bearer token' },
        body: JSON.stringify({ message: 'Find flights', sessionId: 'session-1' })
      } as any, {} as any, () => {})

      expect(getStatusCode(response)).toBe(500)
    })
  })

  describe('approvalHandler', () => {
    it('returns 200 for authenticated valid request', async () => {
      mockHandleApprovalResponse.mockResolvedValue({
        success: true,
        data: { status: 'approved' }
      })

      const response = await approvalHandler({
        headers: { authorization: 'Bearer token' },
        body: JSON.stringify({ approvalId: 'approval-1', status: 'approved' })
      } as any, {} as any, () => {})

      expect(getStatusCode(response)).toBe(200)
      expect(mockHandleApprovalResponse).toHaveBeenCalledWith('approval-1', {
        status: 'approved',
        reviewerId: 'user-123'
      })
    })

    it('returns 400 when required fields are missing', async () => {
      const response = await approvalHandler({
        headers: { authorization: 'Bearer token' },
        body: JSON.stringify({ approvalId: 'approval-1' })
      } as any, {} as any, () => {})

      expect(getStatusCode(response)).toBe(400)
    })

    it('returns 401 when auth fails', async () => {
      mockValidateJWT.mockRejectedValue(new Error('invalid token'))

      const response = await approvalHandler({
        headers: { authorization: 'Bearer invalid' },
        body: JSON.stringify({ approvalId: 'approval-1', status: 'approved' })
      } as any, {} as any, () => {})

      expect(getStatusCode(response)).toBe(401)
    })

    it('returns 400 when service returns unsuccessful result', async () => {
      mockHandleApprovalResponse.mockResolvedValue({
        success: false,
        error: 'not found'
      })

      const response = await approvalHandler({
        headers: { authorization: 'Bearer token' },
        body: JSON.stringify({ approvalId: 'approval-1', status: 'approved' })
      } as any, {} as any, () => {})

      expect(getStatusCode(response)).toBe(400)
    })
  })
})
