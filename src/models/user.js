export const typeDef = /* GraphQL */ `
  type User {
    id: Int
    name: String
  }
`;

export const userResolver = {
  Query: {
    hello: () => "Hello from Yoga!",
    user: () => {
      return {
        id: 1,
        name: "Rajnish",
      };
    },
  },
  User: {
    name: (obj) => {
      return obj.name.toUpperCase();
    },
  },
};
