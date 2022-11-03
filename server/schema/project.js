const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} = require("graphql");

const { clientType } = require("./client");

const Projects = require("../model/project");
const Clients = require("../model/client");

const projectType = new GraphQLObjectType({
  name: "projectType",
  fields: {
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    status: { type: new GraphQLNonNull(GraphQLString) },
    client: {
      type: clientType,
      resolve: (par) => Clients.findById(par.clientId),
    },
  },
});

const projects = {
  type: new GraphQLList(projectType),
  resolve: () => Projects.find(),
};
const project = {
  type: projectType,
  args: { id: { type: GraphQLID } },
  resolve: (par, args) => Projects.findById(args.id),
};

module.exports = { projects, project };
