import { createSchema } from "graphql-yoga";
import { typeDef as User, userResolver } from "../models/user.js";
import _ from "lodash";

const query = ` type Query {
    hello: String
    user: User
  }`;

const resolvers = {
  Query: {
    hello: () => "Hello from Yoga!",
  },
};
export const schema = createSchema({
  typeDefs: [query, User],
  resolvers: _.merge(resolvers, userResolver),
});
