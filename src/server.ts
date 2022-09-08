import { ApolloServer } from "apollo-server";

// import resolvers
import { resolvers } from "./resolvers";

import { loadTypeDefs } from "./utils/helpers";

const app = async () => {
  const typeDefs = await loadTypeDefs();

  // instantiate the apollo server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // start the graphql server
  // server.listen().then(({ url }) => {
  //   console.log(`Server ready at ${url}`);
  // });
  server.listen();
};

app();
