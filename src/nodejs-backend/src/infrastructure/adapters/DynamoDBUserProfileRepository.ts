import { injectable } from 'inversify'
import { PutCommand, GetCommand, UpdateCommand, DeleteCommand, QueryCommand } from '@aws-sdk/lib-dynamodb'
import { Logger } from '@aws-lambda-powertools/logger'
import { BaseDynamoDBRepository, DynamoDBConfig } from './BaseDynamoDBRepository'
import { UserProfileRepository } from '@application/ports/repositories'
import type { UserProfile } from '@domain/entities/UserProfile'

/**
 * DynamoDB implementation of UserProfileRepository
 * Table Design:
 * - PK: userId
 * - Attributes: profile data as document
 * - GSI: email-index for lookup by email
 */
@injectable()
export class DynamoDBUserProfileRepository extends BaseDynamoDBRepository implements UserProfileRepository {
  private readonly tableName: string

  constructor(config: DynamoDBConfig, logger: Logger) {
    super(config, logger)
    this.tableName = this.getTableName('user-profiles')
  }

  async findById(userId: string): Promise<UserProfile | null> {
    try {
      const result = await this.docClient.send(new GetCommand({
        TableName: this.tableName,
        Key: { userId }
      }))

      if (!result.Item) {
        return null
      }

      return this.mapDynamoItemToUserProfile(result.Item)
    } catch (error) {
      this.handleDynamoDBError(error, 'findById')
    }
  }

  async save(userProfile: UserProfile): Promise<void> {
    try {
      const item = this.mapUserProfileToDynamoItem(userProfile)
      
      await this.docClient.send(new PutCommand({
        TableName: this.tableName,
        Item: item,
        // Ensure we don't overwrite if created by another process
        ConditionExpression: 'attribute_not_exists(userId) OR updatedAt < :newUpdatedAt',
        ExpressionAttributeValues: {
          ':newUpdatedAt': item.updatedAt
        }
      }))

      this.logger.info('User profile saved', { userId: userProfile.userId })
    } catch (error) {
      this.handleDynamoDBError(error, 'save')
    }
  }

  async delete(userId: string): Promise<void> {
    try {
      await this.docClient.send(new DeleteCommand({
        TableName: this.tableName,
        Key: { userId },
        ConditionExpression: 'attribute_exists(userId)'
      }))

      this.logger.info('User profile deleted', { userId })
    } catch (error) {
      this.handleDynamoDBError(error, 'delete')
    }
  }

  async findByEmail(email: string): Promise<UserProfile | null> {
    try {
      // Query GSI by email
      const result = await this.docClient.send(new QueryCommand({
        TableName: this.tableName,
        IndexName: 'email-index',
        KeyConditionExpression: 'email = :email',
        ExpressionAttributeValues: {
          ':email': email
        },
        Limit: 1
      }))

      if (!result.Items || result.Items.length === 0) {
        return null
      }

      return this.mapDynamoItemToUserProfile(result.Items[0])
    } catch (error) {
      this.handleDynamoDBError(error, 'findByEmail')
    }
  }

  async updatePreferences(userId: string, preferences: Partial<UserProfile['preferences']>): Promise<void> {
    try {
      const updateExpression = 'SET preferences = :preferences, updatedAt = :updatedAt'
      
      await this.docClient.send(new UpdateCommand({
        TableName: this.tableName,
        Key: { userId },
        UpdateExpression: updateExpression,
        ExpressionAttributeValues: {
          ':preferences': preferences,
          ':updatedAt': new Date().toISOString()
        },
        ConditionExpression: 'attribute_exists(userId)'
      }))

      this.logger.info('User preferences updated', { userId })
    } catch (error) {
      this.handleDynamoDBError(error, 'updatePreferences')
    }
  }

  private mapUserProfileToDynamoItem(profile: UserProfile): any {
    return {
      userId: profile.userId,
      email: profile.email,
      name: profile.name,
      preferences: profile.preferences,
      travelHistory: profile.travelHistory,
      loyaltyPrograms: profile.loyaltyPrograms,
      paymentMethods: profile.paymentMethods,
      createdAt: profile.createdAt.toISOString(),
      updatedAt: profile.updatedAt.toISOString(),
      // Add TTL for data retention (optional)
      ttl: Math.floor((Date.now() + (365 * 24 * 60 * 60 * 1000)) / 1000) // 1 year TTL
    }
  }

  private mapDynamoItemToUserProfile(item: any): UserProfile {
    return {
      userId: item.userId,
      email: item.email,
      name: item.name,
      preferences: item.preferences,
      travelHistory: item.travelHistory,
      loyaltyPrograms: item.loyaltyPrograms || [],
      paymentMethods: item.paymentMethods || [],
      createdAt: new Date(item.createdAt),
      updatedAt: new Date(item.updatedAt)
    }
  }
}