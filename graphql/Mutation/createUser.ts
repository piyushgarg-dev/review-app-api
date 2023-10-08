import crypto from 'crypto'
import { nanoid } from 'nanoid'
import UserService from '../../services/user'
import BadRequestError from '../../errors/BadRequestError'
import type { MutationResolvers } from './../types.generated'

export const createUser: NonNullable<MutationResolvers['createUser']> = async (
  _parent,
  { data },
  _ctx
) => {
  const { firstName, lastName, email, password } = data

  const checkExistsingUser = await UserService.getUserByEmail(email)
  if (checkExistsingUser)
    throw new BadRequestError(`User with email ${data.email} already exists!`)

  const salt = nanoid(12)
  const hashedPassword = crypto
    .createHmac('sha256', salt)
    .update(password)
    .digest('hex')

  const user = await UserService.createUser({
    data: {
      salt,
      email,
      lastName,
      firstName,
      password: hashedPassword,
      authenticationType: 'EMAIL_PASSWORD',
    },
  })

  return user

}
