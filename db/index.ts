import { PrismaClient } from '@prisma/client/'

const isLocalEnv = process.env.NODE_ENV === 'local'

const prismaClient = new PrismaClient({
  log: isLocalEnv ? ['query'] : undefined,
})

export default prismaClient
