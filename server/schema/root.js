const { GraphQLObjectType, GraphQLSchema } = require("graphql");

const {
  clients,
  client,
  addClient,
  updateClient,
  deleteClient,
} = require("./client");
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

const rootMutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    addClient,
    updateClient,
    deleteClient,
  },
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});

module.exports = schema;
