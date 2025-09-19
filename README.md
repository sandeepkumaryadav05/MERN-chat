# MERN-chat
# 💬 MERN Chat App

A full-stack chat application built using **MongoDB, Express.js, Node.js, and EJS**.  
It allows users to **sign up, log in, send messages, edit their own messages, and log out**,  
with all data stored securely in **MongoDB Atlas**.

---

## 🚀 Features

### 👤 Authentication
- User **Signup / Login / Logout**
- Session-based authentication with `express-session`
- Passwords stored securely (hashed)

### 💬 Chat
- Send messages to any registered user
- Each chat shows **sender → receiver**
- Messages are stored in MongoDB with timestamps

### ✏️ Edit Message
- Users can **edit only their own messages**
- Other users cannot edit someone else’s messages (with a warning message)

### 📑 UI / UX
- Clean EJS templates with CSS styling
- Dedicated pages:
  - Login
  - Signup
  - New Chat
  - Edit Chat
  - Chat List

### 🛠 Extra Functionality
- **Seed Script (`seed.js`)** → Populate DB with sample users & messages
- **Method Override** → Enables PUT/DELETE requests in HTML forms
- **Environment Variables (`.env`)** → MongoDB Atlas URI, Session Secret
- **Error Handling** → Graceful error messages when chat/user not found
- **Security**
  - Session cookies
  - MongoDB Atlas for cloud database storage

---

## 🛠️ Tech Stack

### Frontend
- **EJS** → Templating engine
- **CSS** → Styling
- **HTML5** → Structure

### Backend
- **Node.js** → Runtime
- **Express.js** → Web framework
- **express-session** → Session management
- **method-override** → Support PUT/DELETE in forms

### Database
- **MongoDB Atlas** (Cloud Database)
- **Mongoose** (ODM for MongoDB)

### Utilities
- **dotenv** → Manage environment variables
- **nodemon** (dev dependency) → Auto server restart

---

## 📂 Project Structure
MERN-chat/

│── public/ # Static assets (CSS, images)

│── routes/ # Route handlers

│ ├── auth.route.js

│ └── chat.route.js

│── controllers/ # Controller logic

│── models/ # Mongoose models (User, Chat)

│── views/ # EJS templates (login, signup, chats, etc.)

│── seed.js # Script to seed DB with sample data

│── server.js # Main server file

│── .env # Environment variables (ignored in git)

│── .gitignore

│── README.md



# Install dependencies:
npm install

# Setup environment variables:

.env->

MONGO_URI=your_mongodb_atlas_connection_string

SESSION_SECRET=your_secret_key

PORT=3000


# Seed the database (optional - for testing):
node seed.js

Run the server:

node src/app.js

