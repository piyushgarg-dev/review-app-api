import { APIGatewayProxyEventV2, Context } from 'aws-lambda'
import { UserJWTPayload } from '../../services/user'

export interface ServerContext {
  event?: APIGatewayProxyEventV2
  context?: Context
  user?: UserJWTPayload
  headers?: {
    'CloudFront-Viewer-Country'?: string
  }
}
