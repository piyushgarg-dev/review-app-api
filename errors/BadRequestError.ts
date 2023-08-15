import { GraphQLError, GraphQLErrorOptions } from "graphql";

class BadRequestError extends GraphQLError {
  constructor(message?: string, options?: GraphQLErrorOptions) {
    super(message ?? "BadRequestError", {
      ...options,
    });
  }
}

export default BadRequestError;
