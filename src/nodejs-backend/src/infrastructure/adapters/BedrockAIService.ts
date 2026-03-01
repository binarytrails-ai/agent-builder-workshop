import { 
  BedrockRuntimeClient, 
  InvokeModelCommand,
  InvokeModelWithResponseStreamCommand 
} from '@aws-sdk/client-bedrock-runtime'
import { Logger } from '@aws-lambda-powertools/logger'
import type { TravelConfig } from '@domain/models/TravelConfig'

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp?: Date
}

export interface ChatOptions {
  temperature?: number
  maxTokens?: number
  stream?: boolean
  systemPrompt?: string
}

export interface ChatResponse {
  message: string
  tokenUsage?: {
    inputTokens: number
    outputTokens: number
  }
  conversationId?: string
}

/**
 * AWS Bedrock AI Service for LLM interactions
 * Replaces Azure AI Foundry with AWS Bedrock
 */
export class BedrockAIService {
  private client: BedrockRuntimeClient
  private modelId: string
  private logger: Logger

  constructor(config: TravelConfig, logger: Logger) {
    this.client = new BedrockRuntimeClient({
      region: config.awsRegion
    })
    this.modelId = config.bedrockModel
    this.logger = logger

    this.logger.info('BedrockAIService initialized', {
      region: config.awsRegion,
      modelId: this.modelId
    })
  }

  /**
   * Send a chat completion request to Bedrock
   */
  async chatCompletion(
    messages: ChatMessage[], 
    options: ChatOptions = {}
  ): Promise<ChatResponse> {
    try {
      const {
        temperature = 0.7,
        maxTokens = 1000,
        systemPrompt
      } = options

      // Format messages for Claude (Anthropic format)
      const formattedMessages = this.formatMessagesForClaude(messages, systemPrompt)

      const request = {
        modelId: this.modelId,
        contentType: 'application/json',
        accept: 'application/json',
        body: JSON.stringify({
          anthropic_version: 'bedrock-2023-05-31',
          max_tokens: maxTokens,
          temperature,
          messages: formattedMessages
        })
      }

      this.logger.debug('Sending Bedrock request', {
        modelId: this.modelId,
        messageCount: messages.length,
        temperature,
        maxTokens
      })

      const command = new InvokeModelCommand(request)
      const response = await this.client.send(command)

      if (!response.body) {
        throw new Error('No response body from Bedrock')
      }

      const responseBody = JSON.parse(new TextDecoder().decode(response.body))
      
      if (responseBody.error) {
        throw new Error(`Bedrock error: ${responseBody.error.message}`)
      }

      const content = responseBody.content?.[0]?.text
      if (!content) {
        throw new Error('No content in Bedrock response')
      }

      this.logger.info('Bedrock response received', {
        inputTokens: responseBody.usage?.input_tokens,
        outputTokens: responseBody.usage?.output_tokens
      })

      return {
        message: content,
        tokenUsage: {
          inputTokens: responseBody.usage?.input_tokens || 0,
          outputTokens: responseBody.usage?.output_tokens || 0
        }
      }
    } catch (error) {
      this.logger.error('Bedrock chat completion failed', { error })
      throw error
    }
  }

  /**
   * Stream chat completion from Bedrock
   */
  async *streamChatCompletion(
    messages: ChatMessage[],
    options: ChatOptions = {}
  ): AsyncGenerator<string, void, unknown> {
    try {
      const {
        temperature = 0.7,
        maxTokens = 1000,
        systemPrompt
      } = options

      const formattedMessages = this.formatMessagesForClaude(messages, systemPrompt)

      const request = {
        modelId: this.modelId,
        contentType: 'application/json',
        accept: 'application/json',
        body: JSON.stringify({
          anthropic_version: 'bedrock-2023-05-31',
          max_tokens: maxTokens,
          temperature,
          messages: formattedMessages,
          stream: true
        })
      }

      const command = new InvokeModelWithResponseStreamCommand(request)
      const response = await this.client.send(command)

      if (!response.body) {
        throw new Error('No response stream from Bedrock')
      }

      for await (const chunk of response.body) {
        if (chunk.chunk?.bytes) {
          const chunkData = JSON.parse(new TextDecoder().decode(chunk.chunk.bytes))
          
          if (chunkData.type === 'content_block_delta' && chunkData.delta?.text) {
            yield chunkData.delta.text
          }
        }
      }
    } catch (error) {
      this.logger.error('Bedrock stream completion failed', { error })
      throw error
    }
  }

  /**
   * Generate embeddings using Bedrock
   */
  async generateEmbedding(text: string): Promise<number[]> {
    try {
      // For embeddings, we'll use Amazon Titan Embeddings model
      const embeddingModelId = 'amazon.titan-embed-text-v1'
      
      const request = {
        modelId: embeddingModelId,
        contentType: 'application/json',
        accept: 'application/json',
        body: JSON.stringify({
          inputText: text
        })
      }

      const command = new InvokeModelCommand(request)
      const response = await this.client.send(command)

      if (!response.body) {
        throw new Error('No response body from Bedrock embeddings')
      }

      const responseBody = JSON.parse(new TextDecoder().decode(response.body))
      
      if (!responseBody.embedding) {
        throw new Error('No embedding in response')
      }

      this.logger.debug('Generated embedding', {
        textLength: text.length,
        embeddingDimensions: responseBody.embedding.length
      })

      return responseBody.embedding
    } catch (error) {
      this.logger.error('Bedrock embedding generation failed', { error })
      throw error
    }
  }

  /**
   * Format messages for Claude/Anthropic format
   */
  private formatMessagesForClaude(
    messages: ChatMessage[], 
    systemPrompt?: string
  ): any[] {
    const formatted = []

    // Add system message if provided
    if (systemPrompt) {
      formatted.push({
        role: 'system',
        content: systemPrompt
      })
    }

    // Convert messages to Claude format
    for (const message of messages) {
      // Skip system messages if already added
      if (message.role === 'system' && systemPrompt) {
        continue
      }

      formatted.push({
        role: message.role,
        content: message.content
      })
    }

    return formatted
  }

  /**
   * Test connection to Bedrock
   */
  async testConnection(): Promise<boolean> {
    try {
      const testMessage: ChatMessage = {
        role: 'user',
        content: 'Hello, please respond with "Connection successful"'
      }

      const response = await this.chatCompletion([testMessage], {
        maxTokens: 50,
        temperature: 0
      })

      const isSuccessful = response.message.toLowerCase().includes('connection successful')
      
      this.logger.info('Bedrock connection test', {
        successful: isSuccessful,
        response: response.message
      })

      return isSuccessful
    } catch (error) {
      this.logger.error('Bedrock connection test failed', { error })
      return false
    }
  }
}