import type { TravelQuery } from '@domain/entities/TravelEntities'
import type { UserProfile } from '@domain/entities/UserProfile'

export interface ValidationError {
  field: string
  message: string
  code: string
}

export interface ValidationWarning {
  field: string
  message: string
  suggestion?: string
}

export interface ValidationResult {
  isValid: boolean
  errors: ValidationError[]
  warnings: ValidationWarning[]
}

export interface TravelRecommendation {
  type: 'airline' | 'price' | 'route'
  confidence: number
  recommendation: string
  reasoning: string
  basedOn: Array<'preferences' | 'history' | 'context'>
}

export interface TravelDomainService {
  validateTravelQuery(query: TravelQuery): ValidationResult
  calculateRecommendations(userProfile: UserProfile, query: TravelQuery): TravelRecommendation[]
  requiresApproval(flightInfo: unknown, userProfile: UserProfile): boolean
  parseNaturalLanguageQuery(query: string, userContext: UserProfile): unknown
}
