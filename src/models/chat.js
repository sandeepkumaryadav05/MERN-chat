const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  msg: {
    type: String,
    maxLength: 50
  },
  created_at: {
    type: Date,
    required: true
  }
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;

