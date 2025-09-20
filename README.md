# 💬 MERN Chat App  

A full-stack **chat application** built using **MongoDB, Express.js, Node.js, and EJS**.  
It allows users to **sign up, log in, send messages, edit messages, and log out**, with all data stored securely in **MongoDB Atlas**.  

🔗 **Live Demo:** [MERN Chat App](https://mern-chat-2-0hon.onrender.com/)  

---

## 🚀 Features  

### 👤 Authentication  
- User Signup / Login / Logout  
- Session-based authentication with **express-session**  
- Passwords stored securely (hashed)  

### 💬 Chat System  
- Send messages to any registered user  
- Chats display **Sender → Receiver**  
- Messages stored in MongoDB with timestamps  

### ✏️ Message Management  
- Edit only your own messages  
- Other users cannot edit someone else’s messages (with warning message)  

### 📑 UI / UX  
- Clean **EJS templates** with custom CSS  
- Dedicated pages: Login, Signup, New Chat, Edit Chat, Chat List  

### 🛠 Extra Functionality  
- **Seed Script (`init.js`)** → Populate DB with sample users & messages  
- **Method Override** → Enables PUT/DELETE requests in forms  
- **Environment Variables (.env)** → MongoDB Atlas URI, Session Secret  
- **Error Handling** → Graceful error messages when chat/user not found  

### 🔒 Security  
- Session cookies  
- MongoDB Atlas (Cloud Database Storage)  

---

## 🖼 Screenshots  

### 🔐 Login Page  
     <img width="1245" height="723" alt="image" src="https://github.com/user-attachments/assets/bbd4689e-b5ff-43f3-973b-93cd332bbc8d" />

### 💬 Chat Dashboard  
    <img width="1900" height="872" alt="image" src="https://github.com/user-attachments/assets/788ade8a-800e-41e7-ab42-37458030620c" />



---

## 🛠 Tech Stack  

**Frontend**  
- EJS → Templating engine  
- CSS → Styling  
- HTML5 → Structure  

**Backend**  
- Node.js → Runtime  
- Express.js → Web framework  
- express-session → Session management  
- method-override → Support PUT/DELETE in forms  

**Database**  
- MongoDB Atlas → Cloud Database  
- Mongoose → ODM for MongoDB  

**Utilities**  
- dotenv → Manage environment variables  
- nodemon (dev) → Auto server restart  

---

## 📂 Project Structure  



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

│── init.js # Script to seed DB with sample data

│── server.js # Main server file

│── .env # Environment variables (ignored in git)

│── .gitignore

│── README.md




---

## ⚙️ Installation & Setup  

1. **Clone the repo**  
   ```bash
   git clone https://github.com/yourusername/MERN-chat.git
   cd MERN-chat

2.**Install dependencies**:
   npm install

3.**Setup environment variables**:
    MONGO_URI=your_mongodb_atlas_connection_string
    SESSION_SECRET=your_secret_key
    PORT=3000

4.**Seed the database (optional)**
    node init.js

5.**Run the server**
    nodemon src/app.js

   


