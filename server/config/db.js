const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("connected to db successfully");
  } catch (e) {
    console.log("error while connecting to server", e);
  }
};

module.exports = connection;
