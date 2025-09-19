const mongoose = require("mongoose");
const Chat = require("./src/models/chat.js");
const User = require("./src/models/user.js");
require("dotenv").config();

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI); // ✅ no extra options needed
    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
}

async function seed() {
  try {
    // Clear old data
    await Chat.deleteMany({});
    await User.deleteMany({});

    // Create users
    const users = await User.insertMany([
      { username: "mohit", email: "mohit@example.com", password: "1234" },
      { username: "rohit", email: "rohit@example.com", password: "1234" },
      { username: "tony",  email: "tony@example.com",  password: "1234" },
      { username: "adam",  email: "adam@example.com",  password: "1234" },
    ]);

    const [mohit, rohit, tony, adam] = users;

    // Create chats
    await Chat.insertMany([
      { from: mohit._id, to: rohit._id, msg: "send me your exam sheets", created_at: new Date() },
      { from: tony._id,  to: adam._id,  msg: "what are you doing",       created_at: new Date() },
      { from: mohit._id, to: adam._id,  msg: "see you tomorrow",         created_at: new Date() },
    ]);

    console.log("🌱 Seeding done ✅ (Atlas)");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  }
}

main().then(seed);




    