// Enhanced user profile based on UserProfileMemory and travel booking capabilities

export interface UserProfile {
  readonly userId: string
  readonly email: string
  readonly name: string
  readonly preferences: UserPreferences
  readonly travelHistory: TravelHistory
  readonly loyaltyPrograms: LoyaltyProgram[]
  readonly paymentMethods: PaymentMethod[]
  readonly createdAt: Date
  readonly updatedAt: Date
}

export interface UserPreferences {
  readonly travelStyle?: 'budget backpacker' | 'luxury' | 'family' | 'adventure' | 'cultural'
  readonly budgetRange?: '$1000-2000' | '$3000+' | 'budget-friendly' | string
  readonly interests: string[] // ["hiking", "beaches", "museums"] - keep top 3-5
  readonly numberOfTravelers?: number
  readonly tripDuration?: 'weekend' | '1 week' | '2 weeks' | '1 month+' | string
  readonly dietaryRequirements?: 'vegetarian' | 'vegan' | 'gluten-free' | 'halal' | 'kosher' | 'none'
  readonly travelPreferences: {
    readonly preferredAirlines: string[]
    readonly seatPreference: 'window' | 'aisle' | 'middle' | 'any'
    readonly mealPreference: string
    readonly specialRequests: string[]
  }
  readonly communicationPreferences: {
    readonly language: string
    readonly timezone: string
    readonly notificationMethods: ('email' | 'sms' | 'push')[]
  }
}

export interface TravelHistory {
  readonly bookings: TravelBooking[]
  readonly searches: TravelSearchHistory[]
  readonly pastDestinations: PastTrip[]
  readonly frequentDestinations: string[]
}

export interface PastTrip {
  readonly destination?: string
  readonly rating?: 'loved it' | 'okay' | 'disappointing'
  readonly dateVisited?: Date
  readonly duration?: string
}

export interface TravelBooking {
  readonly id: string
  readonly userId: string
  readonly status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  readonly flights: {
    readonly outbound: FlightBooking
    readonly return?: FlightBooking
  }
  readonly passengers: PassengerInfo[]
  readonly totalPrice: number
  readonly currency: string
  readonly bookingReference: string
  readonly createdAt: Date
  readonly updatedAt: Date
}

export interface FlightBooking {
  readonly flightInfo: FlightInfo
  readonly seatAssignments: Record<string, string> // passengerId -> seatNumber
  readonly specialRequests: string[]
}

export interface PassengerInfo {
  readonly id: string
  readonly firstName: string
  readonly lastName: string
  readonly dateOfBirth: Date
  readonly passportNumber?: string
  readonly passportExpiry?: Date
  readonly nationality: string
  readonly frequentFlyerNumber?: string
  readonly specialAssistance?: string[]
}

export interface TravelSearchHistory {
  readonly id: string
  readonly query: string
  readonly searchDate: Date
  readonly results: FlightInfo[]
  readonly selectedFlight?: string // FlightInfo.id
}

export interface LoyaltyProgram {
  readonly airline: string
  readonly membershipNumber: string
  readonly status: string
}

export interface PaymentMethod {
  readonly id: string
  readonly type: 'credit_card' | 'debit_card' | 'bank_account'
  readonly lastFour: string
  readonly expiryMonth?: number
  readonly expiryYear?: number
}

// Import FlightInfo from TravelEntities
import type { FlightInfo } from './TravelEntities'