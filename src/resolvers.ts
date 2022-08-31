import PostQueries from "./components/post/queries";
import PostMutations from "./components/post/mutations";
import type { Resolvers } from "./utils/resolver-types";

export const resolvers: Resolvers = {
  Query: {
    ...PostQueries,
  },
  Mutation: {
    ...PostMutations,
  },
};
