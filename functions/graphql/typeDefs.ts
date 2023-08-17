import { User } from './user'
import { Project } from './project'

const typeDefs = `#graphql
    scalar Date

    ${User.types}
    ${Project.types}

    type Query {
        ${User.queries}
        ${Project.queries}
    }
    
    type Mutation {
        ${User.mutations}
        ${Project.mutations}
    }
    
`

export default typeDefs
