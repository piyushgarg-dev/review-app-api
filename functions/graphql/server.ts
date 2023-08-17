import { ApolloServer } from '@apollo/server'
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda'
import { createAPIGatewayProxyEventRequestHandler } from './RequestHandler'
import UserService from '../../services/user'

import typeDefs from './typeDefs'
import resolvers from './resolvers'
import { ServerContext } from './interfaces'

const server = new ApolloServer<ServerContext>({
  typeDefs,
  resolvers,
  introspection: true,
  allowBatchedHttpRequests: true,
})

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  createAPIGatewayProxyEventRequestHandler(),
  {
    context: async ({ event, context }) => {
      context.callbackWaitsForEmptyEventLoop = false
      const authorizationHeaderValue = event.headers
        ? event.headers['authorization'] ?? event.headers['Authorization']
        : undefined

      const authorizationToken =
        authorizationHeaderValue && authorizationHeaderValue.includes('Bearer')
          ? authorizationHeaderValue?.split('Bearer')[1].trim()
          : null

      const tokenResult = authorizationToken
        ? UserService.verifyToken(authorizationToken)
        : null

      return {
        event,
        context,
        user: tokenResult,
        headers: {
          'CloudFront-Viewer-Country':
            event.headers['CloudFront-Viewer-Country'],
        },
      }
    },
  }
)
