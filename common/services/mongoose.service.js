const mongoose = require("mongoose");
const config = require("../config/env.config");

const connectToMongo = async () => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(config.mongoURI);
      console.log("Connected to Mongo Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

module.exports = {mongoose, connectToMongo};
