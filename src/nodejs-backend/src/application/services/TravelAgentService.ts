import { Logger } from '@aws-lambda-powertools/logger'
import { ContosoTravelAgent, type AgentResponse, type ConversationContext } from '@application/agents/ContosoTravelAgent'
import { FlightTools } from '@application/tools/FlightTools'
import type { TravelConfig } from '@domain/models/TravelConfig'
import type { FlightInfo } from '@domain/entities/TravelEntities'
import type {
  ChatHistoryRepository,
  FlightSearchRepository,
  UserProfileRepository
} from '@application/ports/repositories'

export interface AgentSession {
  sessionId: string
  userId: string
  status: 'active' | 'waiting_approval' | 'completed' | 'error'
  lastActivity: Date
}

export interface BookingRequest {
  sessionId: string
  flightId: string
  passengers: Array<{
    name: string
    email: string
    phone: string
  }>
}

export interface AgentServiceResponse {
  success: boolean
  data?: unknown
  error?: string
  requiresApproval?: boolean
  approvalId?: string
}

interface PendingApproval {
  id: string
  type: 'agent_response' | 'booking'
  sessionId: string
  requesterId: string
  requestData: unknown
  status: 'pending' | 'approved' | 'rejected'
  createdAt: Date
}

export interface ApprovalDecision {
  status: 'approved' | 'rejected'
  reviewerId: string
  comments?: string
}

export class TravelAgentService {
  private readonly agents = new Map<string, ContosoTravelAgent>()
  private readonly sessions = new Map<string, AgentSession>()
  private readonly pendingApprovals = new Map<string, PendingApproval>()

  constructor(
    private readonly flightRepository: FlightSearchRepository,
    private readonly chatHistoryRepository: ChatHistoryRepository,
    private readonly userProfileRepository: UserProfileRepository,
    private readonly config: TravelConfig,
    private readonly logger: Logger
  ) {}

  async getAgent(sessionId: string, userId: string): Promise<ContosoTravelAgent> {
    const existing = this.agents.get(sessionId)
    if (existing) {
      return existing
    }

    const flightTools = new FlightTools(this.flightRepository, this.logger)
    const agent = new ContosoTravelAgent(this.config, flightTools, this.chatHistoryRepository, this.logger)
    await agent.initialize()

    this.agents.set(sessionId, agent)
    this.sessions.set(sessionId, {
      sessionId,
      userId,
      status: 'active',
      lastActivity: new Date()
    })

    return agent
  }

  async processMessage(sessionId: string, userId: string, message: string): Promise<AgentServiceResponse> {
    try {
      const agent = await this.getAgent(sessionId, userId)
      const context = await this.buildConversationContext(sessionId, userId)
      this.touchSession(sessionId)

      const response = await agent.processMessage(message, context)
      const requiresApproval = this.needsApproval(response)

      if (!requiresApproval) {
        return {
          success: true,
          data: {
            message: response.message,
            conversationId: response.conversationId,
            toolCalls: response.toolCalls
          }
        }
      }

      const approvalId = this.createApproval('agent_response', sessionId, userId, response)
      return {
        success: true,
        requiresApproval: true,
        approvalId,
        data: {
          message: 'I prepared options, and this step requires approval before I continue.'
        }
      }
    } catch (error) {
      this.logger.error('Message processing failed', { sessionId, userId, error })
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  async requestBooking(sessionId: string, userId: string, bookingRequest: BookingRequest): Promise<AgentServiceResponse> {
    const flight = await this.flightRepository.findById(bookingRequest.flightId)
    if (!flight) {
      return { success: false, error: 'Flight not found' }
    }

    if (this.shouldRequireApproval(flight)) {
      const approvalId = this.createApproval('booking', sessionId, userId, { bookingRequest, flight })
      return {
        success: true,
        requiresApproval: true,
        approvalId,
        data: {
          message: `Booking request queued for approval for flight ${flight.flightNumber}.`
        }
      }
    }

    return this.finalizeBooking(bookingRequest, flight)
  }

  async handleApprovalResponse(approvalId: string, decision: ApprovalDecision): Promise<AgentServiceResponse> {
    const pending = this.pendingApprovals.get(approvalId)
    if (!pending) {
      return { success: false, error: 'Approval request not found' }
    }

    pending.status = decision.status

    if (pending.type === 'booking' && decision.status === 'approved') {
      const payload = pending.requestData as { bookingRequest: BookingRequest; flight: FlightInfo }
      return this.finalizeBooking(payload.bookingRequest, payload.flight)
    }

    return {
      success: true,
      data: {
        approvalId,
        status: decision.status,
        reviewerId: decision.reviewerId,
        comments: decision.comments
      }
    }
  }

  getSessionInfo(sessionId: string): AgentSession | null {
    return this.sessions.get(sessionId) ?? null
  }

  async cleanupInactiveSessions(maxAgeMinutes: number = 60): Promise<number> {
    const threshold = Date.now() - maxAgeMinutes * 60 * 1000
    let cleaned = 0

    for (const [sessionId, session] of this.sessions.entries()) {
      if (session.lastActivity.getTime() < threshold) {
        this.sessions.delete(sessionId)
        this.agents.delete(sessionId)
        cleaned += 1
      }
    }

    return cleaned
  }

  private async buildConversationContext(sessionId: string, userId: string): Promise<ConversationContext> {
    const history = await this.chatHistoryRepository.findBySessionId(sessionId)

    try {
      const user = await this.userProfileRepository.findById(userId)
      return {
        sessionId,
        userId,
        history: history.slice(-20),
        preferences: user?.preferences
      }
    } catch {
      return {
        sessionId,
        userId,
        history: history.slice(-20)
      }
    }
  }

  private touchSession(sessionId: string): void {
    const session = this.sessions.get(sessionId)
    if (!session) {
      return
    }

    session.lastActivity = new Date()
  }

  private needsApproval(response: AgentResponse): boolean {
    const content = response.message.toLowerCase()
    const bookingKeywords = ['book', 'reserve', 'purchase', 'confirm']
    return bookingKeywords.some((keyword) => content.includes(keyword))
  }

  private createApproval(
    type: PendingApproval['type'],
    sessionId: string,
    requesterId: string,
    requestData: unknown
  ): string {
    const id = `approval-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    this.pendingApprovals.set(id, {
      id,
      type,
      sessionId,
      requesterId,
      requestData,
      status: 'pending',
      createdAt: new Date()
    })

    const session = this.sessions.get(sessionId)
    if (session) {
      session.status = 'waiting_approval'
    }

    return id
  }

  private shouldRequireApproval(flight: FlightInfo): boolean {
    return flight.price >= 1000
  }

  private async finalizeBooking(bookingRequest: BookingRequest, flight: FlightInfo): Promise<AgentServiceResponse> {
    const confirmation = `CTR-${Date.now()}`
    const totalAmount = flight.price * bookingRequest.passengers.length

    return {
      success: true,
      data: {
        confirmation,
        flight: {
          id: flight.id,
          airline: flight.airline,
          flightNumber: flight.flightNumber
        },
        passengers: bookingRequest.passengers,
        totalAmount,
        currency: flight.currency
      }
    }
  }
}
