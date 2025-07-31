# MERN Chat Web

A simple chat web application built with MongoDB, Express.js, and Node.js, using EJS for server-side rendering.

## Project Structure

```
.
├── index.js                # Main server file
├── init.js                 # Script to seed initial chat data
├── models/
│   └── chat.js             # Mongoose schema for chat messages
├── public/
│   ├── download.jpg        # Favicon
│   ├── edit.css            # Styles for edit page
│   ├── new.css             # Styles for new chat page
│   └── style.css           # Main styles for chat pages
├── views/
│   ├── edit.ejs            # Edit chat page
│   ├── index.ejs           # Main chat listing page
│   └── new.ejs             # New chat form
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Features

- View all chat messages
- Create a new chat message
- Edit and delete existing messages
- Responsive and modern UI

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd <project-folder>
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Seed the database with initial chats (optional):
   ```
   node init.js
   ```

## Usage

Start the server:
```
node index.js
```
The app will run at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- EJS (Embedded JavaScript templates)
- HTML/CSS

## License

This project is licensed under the MIT License.
