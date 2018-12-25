const express = require("express");
const app = express();
const port = 3000;

const Sequelize = require("sequelize");
const sequelize = new Sequelize("database", null, null, {
  dialect: "sqlite",
  storage: "db.sqlite"
});

//  MODELS
var User = sequelize.define("User", {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

//  SYNC SCHEMA
sequelize.sync({ force: true }).then(
  function(err) {
    console.log("It worked!");
  },
  function(err) {
    console.log("An error occurred while creating the table:", err);
  }
);

app.get("*", (req, res) => res.send("Hello World! " + new Date()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
