import type { ConversationMessage, TravelQuery } from '@domain/entities/TravelEntities'
import type { UserProfile } from '@domain/entities/UserProfile'

export interface AIService {
  processMessage(message: string, context: ConversationContext): Promise<string>
  extractTravelQuery(message: string): Promise<TravelQuery | null>
  generateResponse(query: TravelQuery, results: FlightInfo[], context: ConversationContext): Promise<string>
}

export interface ConversationContext {
  readonly userId: string
  readonly sessionId: string
  readonly userProfile?: UserProfile
  readonly chatHistory: ConversationMessage[]
  readonly currentQuery?: TravelQuery
}

export interface NotificationService {
  sendEmail(to: string, subject: string, body: string): Promise<void>
  sendSMS(to: string, message: string): Promise<void>
  sendPushNotification(userId: string, title: string, message: string): Promise<void>
}

// Import FlightInfo
import type { FlightInfo } from '@domain/entities/TravelEntities'