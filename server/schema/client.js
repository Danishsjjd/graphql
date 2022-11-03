const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
} = require("graphql");

const Clients = require("../model/client");
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
  resolve: () => Clients.find(),
};

const client = {
  type: clientType,
  args: { id: { type: GraphQLID } },
  resolve: (par, args) => Clients.findById(args.id),
};

const addClient = {
  type: clientType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (par, args) =>
    Clients.create({
      name: args.name,
      email: args.email,
      phone: args.phone,
    }),
};
const updateClient = {
  type: clientType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (par, args) =>
    Clients.findByIdAndUpdate(
      args.id,
      {
        name: args.name,
        email: args.email,
        phone: args.phone,
      },
      { new: true }
    ),
};
const deleteClient = {
  type: clientType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: (par, args) => Clients.findByIdAndDelete(args.id),
};

module.exports = {
  clients,
  client,
  clientType,
  addClient,
  updateClient,
  deleteClient,
};
