🗨️ MERN Chat Web
A simple, server-rendered chat application built using MongoDB, Express.js, and Node.js, with EJS for templating.

📁 Project Structure:
.
├── index.js                # Main server file
├── init.js                 # Script to seed initial chat data
├── models/
│   └── chat.js             # Mongoose schema for chat messages
├── public/
│   ├── download.jpg        # Favicon
│   ├── edit.css            # Styles for edit page
│   ├── new.css             # Styles for new chat page
│   └── style.css           # Main styles for all pages
├── views/
│   ├── edit.ejs            # Edit chat message page
│   ├── index.ejs           # Main chat listing page
│   └── new.ejs             # Form to create new chat message
├── package.json            # Project metadata and dependencies
└── README.md               # Documentation

🚀 Getting Started:
1.Clone the repository: 
  git clone <repository-url>
2.Navigate to the project folder:
  npm install
3.Install dependencies:
  npm install
4.(Optional) Seed the database with initial data:
   node init.js

▶️ Running the Server:
   node index.js
🛠️ Technologies Used
   . Node.js
   . Express.js
   . MongoDB with Mongoose
   . EJS Templating
   . HTML5 & CSS3
  
