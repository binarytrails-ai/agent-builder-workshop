export interface UserProfile {
  readonly userId: string
  readonly email: string
  readonly name: string
  readonly preferences: {
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
  readonly travelHistory: {
    readonly bookings: TravelBooking[]
    readonly searches: TravelSearchHistory[]
    readonly frequentDestinations: string[]
  }
  readonly loyaltyPrograms: {
    readonly airline: string
    readonly membershipNumber: string
    readonly status: string
  }[]
  readonly paymentMethods: {
    readonly id: string
    readonly type: 'credit_card' | 'debit_card' | 'bank_account'
    readonly lastFour: string
    readonly expiryMonth?: number
    readonly expiryYear?: number
  }[]
  readonly createdAt: Date
  readonly updatedAt: Date
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

// Import FlightInfo from TravelEntities
import type { FlightInfo } from './TravelEntities'