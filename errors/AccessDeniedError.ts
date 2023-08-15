import { GraphQLError, GraphQLErrorOptions } from "graphql";

class AccessDeniedError extends GraphQLError {
  constructor(message?: string, options?: GraphQLErrorOptions) {
    super(message ?? "AccessDeniedError", {
      extensions: {
        code: "UNAUTHORIZED",
      },
      ...options,
    });
  }
}

export default AccessDeniedError;
