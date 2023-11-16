const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const routes = require("./messages/routes.config");
const { connectToMongo } = require("./common/services/mongoose.service");
const { port } = require("./common/config/env.config");

const main = () => {
  app.use(express.static(__dirname));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  routes.routesConfig(app);

  app.set("io", io);
  app.set("rootDir", __dirname);

  io.on("connection", () => {
    console.log("a user is connected");
  });

  connectToMongo();

  var server = http.listen(port, () => {
    console.log("server is running on port", server.address().port);
  });
};

main();
