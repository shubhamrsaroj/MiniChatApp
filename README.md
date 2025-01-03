Mini Chat App

Overview

The Mini Chat App is a real-time communication platform that allows users to chat with each other. It includes features such as displaying the typing status of users, showing online/offline status, and displaying usernames. This application aims to provide a seamless and interactive chat experience.

Features

Real-time Messaging: Send and receive messages instantly.

Typing Indicator: See when another user is typing.

Online/Offline Status: View the current online/offline status of users.

User Identification: Display usernames in the chat interface.

Responsive Design: Accessible on both desktop and mobile devices.

Technologies Used

Frontend: HTML, CSS, JavaScript (with a focus on real-time updates using WebSockets).

Backend: Node.js, Express.js.

Database: MongoDB (for storing user data and message history).

Real-time Communication: Socket.IO.

Hosting: Any cloud platform such as Heroku, Vercel, or AWS.

Installation

Clone the repository:

git clone https://github.com/your-repo/MiniChatApp

Navigate to the project directory:

cd mini-chat-app

Install dependencies:

npm install

Set up environment variables:
Create a .env file in the root directory and add the following:

PORT=3000
MONGO_URI=your_mongodb_connection_string

Start the server:

npm start

Access the app:
Open your browser and navigate to http://localhost:3000.

Usage

Sign Up/Login: Users need to create an account or log in to access the chat.

Join the Chat Room: Once logged in, users can join a chat room and start communicating.

Real-Time Updates: The chat interface will show:

Who is currently online.

Who is typing.

Logout: Users can log out when they are done.

API Endpoints

User Management:

POST /register: Register a new user.

POST /login: Authenticate a user.

Chat Features:

GET /online-users: Get a list of online users.

POST /messages: Send a message.

GET /messages: Retrieve message history.



Future Enhancements

Group Chats: Allow users to create and join group chat rooms.

Emoji Support: Add emoji reactions to messages.

File Sharing: Enable users to share files and images.

Push Notifications: Notify users of new messages even when the app is in the background.

Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch: git checkout -b feature/your-feature-name.

Commit your changes: git commit -m 'Add some feature'.

Push to the branch: git push origin feature/your-feature-name.

Submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

Socket.IO

Express.js

MongoDB

Feel free to contact us for any queries or suggestions.
