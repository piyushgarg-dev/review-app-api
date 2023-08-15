export const types = `#graphql

    input CreateUserData {
        firstName: String!
        lastName: String
        email: String!
        password: String!
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String
        username: String
        email: String!
        emailVerified: Boolean!
        authenticationType: String
        profileImageURL: String
        role: String

        createdAt: Date
        updatedAt: Date
    }
`;
