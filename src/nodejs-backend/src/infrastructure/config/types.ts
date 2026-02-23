export const TYPES = {
  // Domain Services
  TravelAgentService: Symbol.for('TravelAgentService'),
  UserProfileService: Symbol.for('UserProfileService'),
  ConversationService: Symbol.for('ConversationService'),
  
  // Repositories
  UserProfileRepository: Symbol.for('UserProfileRepository'),
  ChatHistoryRepository: Symbol.for('ChatHistoryRepository'),
  FlightDataRepository: Symbol.for('FlightDataRepository'),
  
  // External Services
  AIService: Symbol.for('AIService'),
  FlightSearchService: Symbol.for('FlightSearchService'),
  NotificationService: Symbol.for('NotificationService'),
  
  // Configuration
  AppConfig: Symbol.for('AppConfig'),
  
  // Logging & Monitoring
  Logger: Symbol.for('Logger'),
  Tracer: Symbol.for('Tracer'),
  Metrics: Symbol.for('Metrics')
} as const