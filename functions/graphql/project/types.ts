export const types = `#graphql
    input CreateProjectData {
        name: String!
        subdomain: String!
        customDomain: String
    }

    type Project {
        id: ID!
        name: String!
        subdomain: String!
        customDomain: String
        createdAt: Date
        updatedAt: Date
    }
`
