import { User } from './user'
import { Project } from './project'
import { Form } from './form'

export const resolvers = {
  Query: {
    ...User.resolvers.queries,
    ...Project.resolvers.queries,
    ...Form.resolvers.queries,
  },
  Mutation: {
    ...User.resolvers.mutations,
    ...Project.resolvers.mutations,
    ...Form.resolvers.mutations,
  },
  ...Project.resolvers.extraResolvers,
}

export default resolvers
