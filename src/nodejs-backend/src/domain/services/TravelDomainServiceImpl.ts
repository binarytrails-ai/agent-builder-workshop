import type { TravelQuery } from '@domain/entities/TravelEntities'
import type { UserProfile } from '@domain/entities/UserProfile'
import type { 
  TravelDomainService, 
  ValidationResult, 
  ValidationError, 
  ValidationWarning,
  TravelRecommendation
} from './DomainServices'

/**
 * Implementation of travel domain service
 * Contains core business logic for travel operations
 */
export class TravelDomainServiceImpl implements TravelDomainService {
  
  validateTravelQuery(query: TravelQuery): ValidationResult {
    const errors: ValidationError[] = []
    const warnings: ValidationWarning[] = []
    
    // Validate required fields
    if (!query.departure?.city) {
      errors.push({
        field: 'departure.city',
        message: 'Departure city is required',
        code: 'MISSING_DEPARTURE_CITY'
      })
    }
    
    if (!query.arrival?.city) {
      errors.push({
        field: 'arrival.city', 
        message: 'Arrival city is required',
        code: 'MISSING_ARRIVAL_CITY'
      })
    }
    
    if (query.passengers <= 0 || query.passengers > 9) {
      errors.push({
        field: 'passengers',
        message: 'Number of passengers must be between 1 and 9',
        code: 'INVALID_PASSENGER_COUNT'
      })
    }
    
    // Validate dates
    if (query.departure?.date) {
      const depDate = new Date(query.departure.date)
      const now = new Date()
      
      if (depDate <= now) {
        errors.push({
          field: 'departure.date',
          message: 'Departure date must be in the future',
          code: 'PAST_DEPARTURE_DATE'
        })
      }
      
      // Warning for dates too far in advance
      const maxAdvanceMonths = 11
      const maxAdvanceDate = new Date()
      maxAdvanceDate.setMonth(maxAdvanceDate.getMonth() + maxAdvanceMonths)
      
      if (depDate > maxAdvanceDate) {
        warnings.push({
          field: 'departure.date',
          message: 'Departure date is more than 11 months in advance',
          suggestion: 'Consider booking closer to travel date for better prices'
        })
      }
    }
    
    // Validate return date if provided
    if (query.returnDate && query.departure?.date) {
      const depDate = new Date(query.departure.date)
      const retDate = new Date(query.returnDate)
      
      if (retDate <= depDate) {
        errors.push({
          field: 'returnDate',
          message: 'Return date must be after departure date',
          code: 'INVALID_RETURN_DATE'
        })
      }
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      warnings
    }
  }
  
  calculateRecommendations(userProfile: UserProfile, query: TravelQuery): TravelRecommendation[] {
    const recommendations: TravelRecommendation[] = []
    
    // Airline recommendations based on preferences
    if (userProfile.preferences.travelPreferences.preferredAirlines.length > 0) {
      recommendations.push({
        type: 'airline',
        confidence: 0.8,
        recommendation: `Consider flights with ${userProfile.preferences.travelPreferences.preferredAirlines.join(' or ')}`,
        reasoning: 'Based on your preferred airlines',
        basedOn: ['preferences']
      })
    }
    
    // Budget recommendations
    if (userProfile.preferences.budgetRange) {
      const budgetAdvice = this.getBudgetAdvice(userProfile.preferences.budgetRange, query.maxPrice)
      if (budgetAdvice) {
        recommendations.push(budgetAdvice)
      }
    }
    
    // Historical recommendations
    if (userProfile.travelHistory.pastDestinations.length > 0) {
      const similarTrips = userProfile.travelHistory.pastDestinations.filter(trip => 
        trip.rating === 'loved it'
      )
      
      if (similarTrips.length > 0) {
        recommendations.push({
          type: 'route',
          confidence: 0.6,
          recommendation: 'Consider similar timing to your previous successful trips',
          reasoning: `You enjoyed ${similarTrips.length} similar trips in the past`,
          basedOn: ['history']
        })
      }
    }
    
    return recommendations
  }
  
  requiresApproval(flightInfo: any, userProfile: UserProfile): boolean {
    // High-value flights require approval
    if (flightInfo.price > 5000) {
      return true
    }
    
    // International flights for basic users
    const userTier = this.calculateUserTier(userProfile)
    if (userTier === 'basic' && this.isInternationalFlight(flightInfo)) {
      return true
    }
    
    // First class flights require approval for non-VIP users
    if (userTier !== 'vip' && flightInfo.flightNumber.includes('F')) { // Simplified check
      return true
    }
    
    return false
  }
  
  parseNaturalLanguageQuery(query: string, userContext: UserProfile): any {
    // Improved natural language parsing
    const cityRegex = /(?:from|in)\s+([A-Za-z\s]+?)\s+(?:to|->)\s+([A-Za-z\s]+?)(?:\s+with|$)/
    const dateRegex = /(?:on|date)\s+(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4})/
    const passengersRegex = /(\d+)\s+(?:passengers?|people|travelers?)/
    
    const cityMatch = query.match(cityRegex)
    const dateMatch = query.match(dateRegex)
    const passengerMatch = query.match(passengersRegex)
    
    if (cityMatch) {
      return {
        origin: cityMatch[1].trim(),
        destination: cityMatch[2].trim(),
        departureDate: dateMatch?.[1] || new Date().toISOString().split('T')[0],
        returnDate: dateMatch?.[1] || new Date().toISOString().split('T')[0],
        travelers: passengerMatch ? parseInt(passengerMatch[1]) : 1,
        maxBudget: userContext.preferences.budgetRange ? this.parseBudgetRange(userContext.preferences.budgetRange) : undefined
      }
    }
    
    return null
  }
  
  private getBudgetAdvice(budgetRange: string, maxPrice?: number): TravelRecommendation | null {
    if (budgetRange === 'budget-friendly' && maxPrice && maxPrice > 1000) {
      return {
        type: 'price',
        confidence: 0.7,
        recommendation: 'Consider flexible dates or alternative airports for better prices',
        reasoning: 'Your budget preference suggests looking for cost-effective options',
        basedOn: ['preferences']
      }
    }
    return null
  }
  
  private calculateUserTier(userProfile: UserProfile): 'basic' | 'premium' | 'vip' {
    const bookingCount = userProfile.travelHistory.bookings.length
    const totalSpent = userProfile.travelHistory.bookings.reduce((sum, booking) => sum + booking.totalPrice, 0)
    
    if (bookingCount >= 10 && totalSpent >= 25000) return 'vip'
    if (bookingCount >= 5 && totalSpent >= 10000) return 'premium'
    return 'basic'
  }
  
  private isInternationalFlight(flightInfo: any): boolean {
    // Simplified check - in reality would use airport code databases
    return flightInfo.departure.city !== flightInfo.arrival.city
  }
  
  private parseBudgetRange(budgetRange: string): number | undefined {
    if (budgetRange.includes('$1000-2000')) return 2000
    if (budgetRange.includes('$3000+')) return 5000
    return undefined
  }
}