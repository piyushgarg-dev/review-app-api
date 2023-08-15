import { User } from "./user";

const typeDefs = `#graphql
    scalar Date

    ${User.types}

    type Query {
        ${User.queries}
    }
    
    type Mutation {
        ${User.mutations}
    }
    
`;

export default typeDefs;
