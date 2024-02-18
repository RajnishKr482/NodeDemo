import { createSchema } from "graphql-yoga";

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String
      user: User
    }
    type User {
      id: Int
      name: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => "Hello from Yoga!",
      user: () => {
        return {
          id: 1,
          name: "Rajnish",
        };
      },
    },
  },
});
