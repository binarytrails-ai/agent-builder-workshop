import { injectable } from 'inversify'
import { PutCommand, QueryCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb'
import { Logger } from '@aws-lambda-powertools/logger'
import { BaseDynamoDBRepository, DynamoDBConfig } from './BaseDynamoDBRepository'
import { ChatHistoryRepository } from '@application/ports/repositories'
import type { ConversationMessage } from '@domain/entities/TravelEntities'

/**
 * DynamoDB implementation of ChatHistoryRepository
 * Table Design:
 * - PK: sessionId
 * - SK: timestamp (sortable for chronological order)
 * - GSI: userId-timestamp-index for user-specific queries
 * - TTL: Auto-expire old conversations after 90 days
 */
@injectable()
export class DynamoDBChatHistoryRepository extends BaseDynamoDBRepository implements ChatHistoryRepository {
  private readonly tableName: string

  constructor(config: DynamoDBConfig, logger: Logger) {
    super(config, logger)
    this.tableName = this.getTableName('chat-history')
  }

  async save(message: ConversationMessage): Promise<void> {
    try {
      const item = this.mapMessageToDynamoItem(message)
      
      await this.docClient.send(new PutCommand({
        TableName: this.tableName,
        Item: item
      }))

      this.logger.debug('Chat message saved', { 
        messageId: message.id, 
        sessionId: message.sessionId,
        role: message.role
      })
    } catch (error) {
      this.handleDynamoDBError(error, 'save message')
    }
  }

  async findBySessionId(sessionId: string): Promise<ConversationMessage[]> {
    try {
      const result = await this.docClient.send(new QueryCommand({
        TableName: this.tableName,
        KeyConditionExpression: 'sessionId = :sessionId',
        ExpressionAttributeValues: {
          ':sessionId': sessionId
        },
        ScanIndexForward: true // Sort by timestamp ascending
      }))

      if (!result.Items) {
        return []
      }

      return result.Items.map(item => this.mapDynamoItemToMessage(item))
    } catch (error) {
      this.handleDynamoDBError(error, 'findBySessionId')
    }
  }

  async findByUserId(userId: string, limit: number = 50): Promise<ConversationMessage[]> {
    try {
      const result = await this.docClient.send(new QueryCommand({
        TableName: this.tableName,
        IndexName: 'userId-timestamp-index',
        KeyConditionExpression: 'userId = :userId',
        ExpressionAttributeValues: {
          ':userId': userId
        },
        ScanIndexForward: false, // Sort by timestamp descending (newest first)
        Limit: limit
      }))

      if (!result.Items) {
        return []
      }

      return result.Items.map(item => this.mapDynamoItemToMessage(item))
    } catch (error) {
      this.handleDynamoDBError(error, 'findByUserId')
    }
  }

  async deleteSession(sessionId: string): Promise<void> {
    try {
      // First, get all messages for the session
      const messages = await this.findBySessionId(sessionId)
      
      // Delete each message (DynamoDB doesn't support batch delete by partition key only)
      for (const message of messages) {
        await this.docClient.send(new DeleteCommand({
          TableName: this.tableName,
          Key: {
            sessionId: message.sessionId,
            timestamp: message.timestamp.toISOString()
          }
        }))
      }

      this.logger.info('Chat session deleted', { sessionId, messageCount: messages.length })
    } catch (error) {
      this.handleDynamoDBError(error, 'deleteSession')
    }
  }

  private mapMessageToDynamoItem(message: ConversationMessage): any {
    const timestamp = message.timestamp.toISOString()
    
    return {
      sessionId: message.sessionId,
      timestamp: timestamp, // Sort key
      messageId: message.id,
      userId: message.userId,
      role: message.role,
      content: message.content,
      metadata: message.metadata || {},
      // TTL for automatic cleanup (90 days)
      ttl: Math.floor((Date.now() + (90 * 24 * 60 * 60 * 1000)) / 1000)
    }
  }

  private mapDynamoItemToMessage(item: any): ConversationMessage {
    return {
      id: item.messageId,
      sessionId: item.sessionId,
      userId: item.userId,
      role: item.role,
      content: item.content,
      timestamp: new Date(item.timestamp),
      metadata: item.metadata && Object.keys(item.metadata).length > 0 ? item.metadata : undefined
    }
  }
}