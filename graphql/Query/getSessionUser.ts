import UserService from '../../services/user'
import type { QueryResolvers } from './../types.generated'

export const getSessionUser: NonNullable<
  QueryResolvers['getSessionUser']
> = async (_parent, _arg, _ctx) => {
  if (!_ctx.user) return null
  const user = UserService.getUserById(_ctx.user.id)
  return user
}
