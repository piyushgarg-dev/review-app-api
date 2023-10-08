import UserService from '../../services/user'
import type { QueryResolvers } from './../types.generated'

export const singinwithEmailPassword: NonNullable<
  QueryResolvers['singinwithEmailPassword']
> = async (_parent, { email, password }, _ctx) => {
  return UserService.signinWithEmailAndPassword(email, password as string)
}
