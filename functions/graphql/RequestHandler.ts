import { HeaderMap } from '@apollo/server'
import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { createRequestHandler } from '@as-integrations/aws-lambda/dist/request-handlers/_create'

export const createAPIGatewayProxyEventRequestHandler = <
  Event extends APIGatewayProxyEvent = APIGatewayProxyEvent,
>() => {
  return createRequestHandler<Event, APIGatewayProxyResult>(
    {
      parseHttpMethod(event) {
        return event.httpMethod
      },
      parseHeaders(event) {
        const headerMap = new HeaderMap()
        for (const [key, value] of Object.entries(event.headers ?? {})) {
          headerMap.set(key, value ?? '')
        }
        return headerMap
      },
      parseBody(event, headers) {
        if (event.body) {
          const contentType = headers.get('content-type')
          const parsedBody = event.isBase64Encoded
            ? Buffer.from(event.body, 'base64').toString('utf8')
            : event.body
          if (contentType?.startsWith('application/json')) {
            return JSON.parse(parsedBody)
          }
          if (contentType?.startsWith('text/plain')) {
            return parsedBody
          }
        }
        return ''
      },
      parseQueryParams(event) {
        const params = new URLSearchParams()
        for (const [key, value] of Object.entries(
          event.multiValueQueryStringParameters ?? {}
        )) {
          for (const v of value ?? []) {
            params.append(key, v)
          }
        }
        return params.toString()
      },
    },
    {
      success({ body, headers, status }) {
        if (body.kind !== 'complete') {
          throw new Error('Only complete body type supported')
        }

        return {
          statusCode: status ?? 200,
          headers: {
            ...Object.fromEntries(headers),
            'content-length': Buffer.byteLength(body.string).toString(),
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
          body: body.string,
        }
      },
      error(error) {
        return {
          statusCode: 400,
          body: (error as Error).message,
        }
      },
    }
  )
}
