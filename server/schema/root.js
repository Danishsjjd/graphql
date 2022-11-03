const { GraphQLObjectType, GraphQLSchema } = require("graphql");

const { clients, client } = require("./client");
const { projects, project } = require("./project");

const rootQuery = new GraphQLObjectType({
  name: "query",
  fields: {
    clients,
    client,
    projects,
    project,
  },
});

const schema = new GraphQLSchema({
  query: rootQuery,
});

module.exports = schema;
