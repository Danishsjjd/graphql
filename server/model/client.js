const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const Clients = mongoose.model("clients", clientSchema);

module.exports = Clients;
