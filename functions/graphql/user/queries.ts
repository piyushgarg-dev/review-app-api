export const queries = `#graphql
    getSessionUser: User
    verifyGoogleAuthToken(googleToken: String!): String
    singinwithEmailPassword(email: String!, password: String): String
`;
