const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} = require("graphql");

const { projects: projectData, clients: clientData } = require("../sampleData");
const { clientType } = require("./client");

const projectType = new GraphQLObjectType({
  name: "projectType",
  fields: {
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    status: { type: new GraphQLNonNull(GraphQLString) },
    client: {
      type: clientType,
      resolve: (par) =>
        clientData.find((singleClient) => singleClient.id === par.clientId),
    },
  },
});

const projects = {
  type: new GraphQLList(projectType),
  resolve: () => projectData,
};
const project = {
  type: projectType,
  args: { id: { type: GraphQLID } },
  resolve: (par, args) =>
    projectData.find((singleProject) => singleProject.id === args.id),
};

module.exports = { projects, project };
