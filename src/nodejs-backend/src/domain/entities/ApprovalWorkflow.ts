/**
 * Represents an approval request for a function call.
 * Migrated from C# ApprovalModels.cs
 */
export interface ApprovalRequest {
  readonly approvalId: string
  readonly functionName: string
  readonly functionArguments?: Record<string, unknown>
  readonly message?: string
  readonly requestedBy: string
  readonly requestedAt: Date
  readonly expiresAt?: Date
  readonly priority: 'low' | 'medium' | 'high'
  readonly category: 'flight_booking' | 'payment' | 'cancellation' | 'modification'
}

export interface ApprovalResponse {
  readonly approvalId: string
  readonly approved: boolean
  readonly approvedBy?: string
  readonly approvedAt?: Date
  readonly reason?: string
  readonly conditions?: string[]
}

export enum ApprovalStatus {
  Pending = 'pending',
  Approved = 'approved',  
  Rejected = 'rejected',
  Expired = 'expired',
  Cancelled = 'cancelled'
}

export interface ApprovalWorkflow {
  readonly id: string
  readonly request: ApprovalRequest
  readonly response?: ApprovalResponse
  readonly status: ApprovalStatus
  readonly workflowSteps: ApprovalStep[]
  readonly createdAt: Date
  readonly updatedAt: Date
}

export interface ApprovalStep {
  readonly id: string
  readonly stepName: string
  readonly approverRole: string
  readonly requiredApprovers: number
  readonly currentApprovers: string[]
  readonly status: 'pending' | 'approved' | 'rejected' | 'skipped'
  readonly completedAt?: Date
}

// Approval rules for different types of requests
export interface ApprovalRule {
  readonly category: ApprovalRequest['category']
  readonly condition: (request: ApprovalRequest) => boolean
  readonly requiredApprovers: string[] // roles or specific user IDs
  readonly autoApprovalThreshold?: {
    readonly amount?: number
    readonly userTier?: 'basic' | 'premium' | 'vip'
  }
}