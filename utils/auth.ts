import { UserRole } from '@prisma/client'
import AccessDeniedError from '../errors/AccessDeniedError'
import { ServerContext } from '../functions/graphql/interfaces'

interface Options {
  allowedRoles?: UserRole[]
}

export const ensureAuthenticated = (ctx: ServerContext, options?: Options) => {
  if (!ctx.user)
    throw new AccessDeniedError(`Please make sure you are authenticated!`)
  if (options && options.allowedRoles)
    if (!options.allowedRoles.includes(ctx.user.role))
      throw new AccessDeniedError('Permission Denied!')
  return
}
