import type { UserProfile } from '@domain/entities/UserProfile'

export interface UserProfileRepository {
  findById(userId: string): Promise<UserProfile | null>
  save(userProfile: UserProfile): Promise<void>
  delete(userId: string): Promise<void>
  findByEmail(email: string): Promise<UserProfile | null>
  updatePreferences(userId: string, preferences: Partial<UserProfile['preferences']>): Promise<void>
}

export interface ChatHistoryRepository {
  save(message: ConversationMessage): Promise<void>
  findBySessionId(sessionId: string): Promise<ConversationMessage[]>
  findByUserId(userId: string, limit?: number): Promise<ConversationMessage[]>
  deleteSession(sessionId: string): Promise<void>
}

export interface FlightSearchRepository {
  search(query: TravelQuery): Promise<FlightInfo[]>
  findById(flightId: string): Promise<FlightInfo | null>
  findByRoute(departure: string, arrival: string, date: Date): Promise<FlightInfo[]>
}

// Import types from domain entities
import type { ConversationMessage, TravelQuery, FlightInfo } from '@domain/entities/TravelEntities'