import { User } from './user'
import { Project } from './project'
import { Form } from './form'

const typeDefs = `#graphql
    scalar Date

    ${User.types}
    ${Project.types}
    ${Form.types}

    type Query {
        ${User.queries}
        ${Project.queries}
        ${Form.queries}
    }
    
    type Mutation {
        ${User.mutations}
        ${Project.mutations}
        ${Form.mutations}
    }
    
`

export default typeDefs
