const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const app = express();

const UserSchema = buildSchema({});
app.use(
  "/graphql",
  graphqlHTTP({
    schema: UserSchema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(5000, () => {
  console.log("Running port 5000");
});
