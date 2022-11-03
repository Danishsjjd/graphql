const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
} = require("graphql");

const { clients: clientData } = require("../sampleData");
// client type
const clientType = new GraphQLObjectType({
  name: "clientType",
  fields: {
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
  },
});
// query
const clients = {
  type: new GraphQLList(clientType),
  resolve: () => clientData,
};

const client = {
  type: clientType,
  args: { id: { type: GraphQLID } },
  resolve: (par, args) =>
    clientData.find((singleClient) => singleClient.id === args.id),
};

module.exports = {
  clients,
  client,
  clientType,
};
