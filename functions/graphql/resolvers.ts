import { User } from './user'
import { Project } from './project'

export const resolvers = {
  Query: {
    ...User.resolvers.queries,
    ...Project.resolvers.queries,
  },
  Mutation: {
    ...User.resolvers.mutations,
    ...Project.resolvers.mutations,
  },
}

export default resolvers
