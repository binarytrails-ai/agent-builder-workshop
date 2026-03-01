import { Logger } from '@aws-lambda-powertools/logger'
import { BedrockAIService, type ChatMessage } from '@infrastructure/adapters/BedrockAIService'
import { FlightTools, type ToolCallRequest } from '@application/tools/FlightTools'
import type { TravelConfig } from '@domain/models/TravelConfig'
import type { ConversationMessage } from '@domain/entities/TravelEntities'
import type { ChatHistoryRepository } from '@application/ports/repositories'

export interface AgentResponse {
  message: string
  conversationId?: string
  toolCalls?: Array<{
    tool: string
    input: Record<string, unknown>
    output: unknown
  }>
  reasoning?: string
}

export interface ConversationContext {
  sessionId: string
  userId: string
  history: ConversationMessage[]
  preferences?: unknown
}

export class ContosoTravelAgent {
  private readonly aiService: BedrockAIService
  private readonly flightTools: FlightTools
  private readonly chatHistoryRepo: ChatHistoryRepository
  private readonly logger: Logger

  constructor(
    config: TravelConfig,
    flightTools: FlightTools,
    chatHistoryRepo: ChatHistoryRepository,
    logger: Logger
  ) {
    this.aiService = new BedrockAIService(config, logger)
    this.flightTools = flightTools
    this.chatHistoryRepo = chatHistoryRepo
    this.logger = logger
  }

  async initialize(): Promise<void> {
    this.logger.debug('ContosoTravelAgent initialized')
  }

  async processMessage(message: string, context: ConversationContext): Promise<AgentResponse> {
    const normalizedMessage = message.toLowerCase()
    let toolCalls: AgentResponse['toolCalls'] = []

    if (this.isFlightSearchIntent(normalizedMessage)) {
      const parsed = this.tryParseRoute(message)
      if (parsed) {
        const request: ToolCallRequest = {
          name: 'search_flights',
          arguments: {
            origin: parsed.origin,
            destination: parsed.destination
          }
        }

        const toolResult = await this.flightTools.executeToolCall(request)
        toolCalls = [
          {
            tool: request.name,
            input: request.arguments,
            output: toolResult
          }
        ]

        if (toolResult.success) {
          const flights = (toolResult.data as { flights?: unknown[] } | undefined)?.flights?.length ?? 0
          const reply = flights > 0
            ? `I found ${flights} flight option(s) from ${parsed.origin} to ${parsed.destination}. Would you like me to compare by price, duration, or convenience?`
            : `I couldn't find flights from ${parsed.origin} to ${parsed.destination} right now. Would you like to try nearby airports or flexible dates?`

          await this.saveConversationMessages(context.sessionId, context.userId, [
            { role: 'user', content: message },
            { role: 'assistant', content: reply }
          ])

          return {
            message: reply,
            conversationId: context.sessionId,
            toolCalls,
            reasoning: 'Used flight search tool for route lookup'
          }
        }
      }
    }

    const aiResponse = await this.aiService.chatCompletion(this.toChatMessages(message, context), {
      systemPrompt:
        'You are Contoso Travel Assistant. Be concise, practical, and ask one follow-up question when helpful.'
    })

    await this.saveConversationMessages(context.sessionId, context.userId, [
      { role: 'user', content: message },
      { role: 'assistant', content: aiResponse.message }
    ])

    return {
      message: aiResponse.message,
      conversationId: context.sessionId,
      toolCalls,
      reasoning: 'Generated response using Bedrock model'
    }
  }

  async getConversationHistory(sessionId: string): Promise<ConversationMessage[]> {
    return this.chatHistoryRepo.findBySessionId(sessionId)
  }

  private isFlightSearchIntent(message: string): boolean {
    return ['flight', 'flights', 'fly', 'airfare', 'ticket'].some((token) => message.includes(token))
  }

  private tryParseRoute(message: string): { origin: string; destination: string } | null {
    const routeRegex = /from\s+([a-zA-Z\s]+?)\s+to\s+([a-zA-Z\s]+?)(?:[.!?]|$)/i
    const match = message.match(routeRegex)

    if (!match?.[1] || !match?.[2]) {
      return null
    }

    return {
      origin: match[1].trim(),
      destination: match[2].trim()
    }
  }

  private toChatMessages(message: string, context: ConversationContext): ChatMessage[] {
    const historyMessages: ChatMessage[] = context.history.slice(-10).map((item) => ({
      role: item.role === 'system' ? 'system' : item.role,
      content: item.content,
      timestamp: item.timestamp
    }))

    historyMessages.push({ role: 'user', content: message })
    return historyMessages
  }

  private async saveConversationMessages(
    sessionId: string,
    userId: string,
    messages: Array<{ role: 'user' | 'assistant'; content: string }>
  ): Promise<void> {
    for (const message of messages) {
      await this.chatHistoryRepo.save({
        id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        sessionId,
        userId,
        role: message.role,
        content: message.content,
        timestamp: new Date()
      })
    }
  }
}
