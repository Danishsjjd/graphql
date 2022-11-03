const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();

const schema = require("./schema/root");
const connection = require("./config/db");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

connection();
app.listen(port, () => console.log("server is running at ", port));
