const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "clients",
  },
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
  },
});

const Projects = mongoose.model("projects", projectSchema);

module.exports = Projects;
