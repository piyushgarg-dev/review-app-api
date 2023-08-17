import { nanoid } from 'nanoid'
import crypto from 'crypto'
import BadRequestError from '../../../errors/BadRequestError'
import UserService from '../../../services/user'
import { ServerContext } from '../interfaces'
import { CreateUserData } from './interfaces'

const queries = {
  getSessionUser: async (_: any, agrs: any, ctx: ServerContext) => {
    if (!ctx.user) return null
    const user = UserService.getUserById(ctx.user.id)
    return user
  },
  singinwithEmailPassword: async (
    _: any,
    { email, password }: { email: string; password: string },
    ctx: ServerContext
  ) => {
    return UserService.signinWithEmailAndPassword(email, password)
  },
  verifyGoogleAuthToken: async (
    _: any,
    { googleToken }: { googleToken: string },
    ctx: ServerContext
  ) => {
    // const tokenResult = await GoogleAPIService.verifyUserToken(googleToken);
    // if (!tokenResult) throw new AccessDeniedError("Invalid Token");
    // const { email, email_verified, given_name, family_name, picture } =
    //   tokenResult;
    // const checkUserExist = await UserService.getUserByEmail(email);
    // if (!checkUserExist)
    //   await UserService.createUser({
    //     data: {
    //       firstName: given_name,
    //       lastName: family_name,
    //       email,
    //       profileImageURL: picture,
    //       emailVerified: email_verified === "true",
    //       authenticationType: "GOOGLE",
    //     },
    //   });
    // const token = await UserService.generateTokenForUser(email);
    // return token;
  },
}

const mutations = {
  createUser: async (
    _: any,
    { data }: { data: CreateUserData },
    ctx: ServerContext
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
        firstName,
        lastName,
        email,
        password: hashedPassword,
        salt,
        authenticationType: 'EMAIL_PASSWORD',
      },
    })

    return user
  },
}

export const resolvers = { queries, mutations }
