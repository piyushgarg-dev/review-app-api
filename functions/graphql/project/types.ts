export const types = `#graphql
    input CreateProjectData {
        name: String!
        slug: String!
    }

    type Project {
        id: ID!
        name: String!
        slug: String!
        createdAt: Date
        updatedAt: Date
    }
`
