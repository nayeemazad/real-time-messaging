const MessageModel = require("../models/messages.model");

exports.getMessages = (req, res) => {
  MessageModel.getMessages(req.body).then((result) => {
    res.status(200).send(result);
  });
};

exports.saveMessage = (req, res) => {
  MessageModel.saveMessage(req.body).then((result) => {
    req.app.get("io").emit("message", result);
    res.sendStatus(201);
  });
};

exports.getHomePage = (req, res) => {
  res.sendFile(`${req.app.get("rootDir")}/messages/frontend/views/index.html`);
};
