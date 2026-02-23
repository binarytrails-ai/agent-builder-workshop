// Core domain interfaces for the travel agent system

export interface FlightInfo {
  readonly id: string
  readonly airline: string
  readonly flightNumber: string
  readonly departure: {
    readonly airport: string
    readonly city: string
    readonly datetime: Date
  }
  readonly arrival: {
    readonly airport: string
    readonly city: string
    readonly datetime: Date
  }
  readonly price: number
  readonly currency: string
  readonly duration: number // minutes
  readonly stops: number
  readonly aircraft?: string
}

export interface UserContext {
  readonly userId: string
  readonly sessionId: string
  readonly preferences: {
    readonly preferredAirlines?: string[]
    readonly seatPreference?: 'window' | 'aisle' | 'middle'
    readonly mealPreference?: string
    readonly frequentFlyerNumbers?: Record<string, string>
  }
  readonly travelHistory: FlightInfo[]
  readonly currentLocation?: {
    readonly city: string
    readonly country: string
  }
}

export interface TravelQuery {
  readonly id: string
  readonly userId: string
  readonly sessionId: string
  readonly query: string
  readonly departure?: {
    readonly city: string
    readonly airport?: string
    readonly date?: Date
  }
  readonly arrival?: {
    readonly city: string
    readonly airport?: string
  }
  readonly passengers: number
  readonly class?: 'economy' | 'business' | 'first'
  readonly returnDate?: Date
  readonly maxPrice?: number
  readonly preferences?: {
    readonly directFlights?: boolean
    readonly maxStops?: number
    readonly departureTimeRange?: {
      readonly earliest: string // HH:mm
      readonly latest: string // HH:mm
    }
  }
  readonly timestamp: Date
}

export interface ConversationMessage {
  readonly id: string
  readonly sessionId: string
  readonly userId: string
  readonly role: 'user' | 'assistant' | 'system'
  readonly content: string
  readonly timestamp: Date
  readonly metadata?: {
    readonly travelQuery?: TravelQuery
    readonly flightResults?: FlightInfo[]
    readonly actionRequired?: boolean
  }
}