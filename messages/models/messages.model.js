const mongoose = require("../../common/services/mongoose.service").mongoose;
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  message: String,
});

messageSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

messageSchema.set("toJSON", {
  virtuals: true,
});

let Message = mongoose.model("Message", messageSchema);

exports.getMessages = async (requestData) => {
  let messages = await Message.find({});
  return messages;
};

exports.saveMessage = async (requestData) => {
  let message = new Message(requestData);
  await message.save();
  console.log("new message:", message);
  return message;
};
