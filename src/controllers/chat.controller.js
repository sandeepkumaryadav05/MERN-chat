const Chat = require("../models/chat");
const User = require("../models/user");

// Get all chats
exports.getAllChats = async (req, res) => {
  try {
    // If schema uses ObjectId, populate usernames
    const chats = await Chat.find()
      .populate("from", "username")
      .populate("to", "username")
      .sort({ created_at: -1 });

    res.render("chat/index", { chats, user: req.session.user });
  } catch (err) {
    console.error("Error fetching chats:", err);
    res.status(500).send("Error fetching chats");
  }
};

// Show new chat form

exports.showNewForm = async (req, res) => {
  try {
    const users = await User.find({}, "username _id"); // only get username + id
    res.render("chat/new", { 
      user: req.session.user,
      users 
    });
  } catch (err) {
    res.status(500).send("Error loading chat form");
  }
};


// Create new chat
exports.createChat = async (req, res) => {
  try {
    if (!req.session.user) return res.redirect("/auth/login");

    const { to, msg } = req.body;

    const recipient = await User.findOne({ username: to });
    // console.log("Recipient:", recipient);
    if (!recipient) {
      return res.status(400).send("Recipient not found");
    }

    const newChat = new Chat({
      from: req.session.user.id,
      to: recipient._id,
      created_at: new Date(),
      msg,
    });

    await newChat.save();
    res.redirect("/chats");
  } catch (err) {
    console.error("Error saving chat:", err);
    res.status(500).send("Error saving chat");
  }
};


// Show edit form
exports.showEditForm = async (req, res) => {
  try {
    const { id } = req.params;
  
    const chat = await Chat.findById(id);
    if (!chat) {
      return res.status(404).send("Chat not found");
    }
    res.render("chat/edit", { chat, user: req.session.user });
  } catch (err) {
    console.error("Error fetching chat for edit:", err);
    res.status(500).send("Error fetching chat for edit");
  }
};

// Update chat
exports.updateChat = async (req, res) => {
  try {
    const { id } = req.params;
    const { msg } = req.body;
    await Chat.findByIdAndUpdate(id, { msg }, { runValidators: true });
    res.redirect("/chats");
  } catch (err) {
    console.error("Error updating chat:", err);
    res.status(500).send("Error updating chat");
  }
};

// Delete chat
exports.deleteChat = async (req, res) => {
  try {
    const { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
  } catch (err) {
    console.error("Error deleting chat:", err);
    res.status(500).send("Error deleting chat");
  }
};
