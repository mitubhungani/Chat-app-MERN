// const { Server } = require("socket.io");
// const http = require("http");
// const express = require("express");
// const cors = require("cors");
// const app = express();
// // app.use(cors())
// app.use(cors({ origin: 'https://chat-app-mern-1-gcf1.onrender.com' }));
// const server = http.createServer(app);

// // const io = new Server(server, {
// //   cors: {
// //     origin: ["http://localhost:3000"],
// //     methods: ["GET", "POST"],
// //   },
// // });

// const io = new Server(server, {
//   cors: {
//     origin: ["https://chat-app-mern-1-gcf1.onrender.com"],
//     methods: ["GET", "POST"],
//   },
// });

// const getReceiverSocketId =(receiverId)=>{
//   return userSocketMap[receiverId];
// }

// const userSocketMap = {};

// io.on("connection", (socket) => {
//   console.log("a user connected", socket.id);

//   const userId = socket.handshake.query.userId;

//   if (userId != "undefined") userSocketMap[userId] = socket.id;
//   io.emit("getOnlineUsers", Object.keys(userSocketMap));

//   socket.on("disconnect", () => {
//     console.log("user disconnected", socket.id);
//     delete userSocketMap[userId];
//     io.emit("getOnlineUsers", Object.keys(userSocketMap));
//   });
// });

// module.exports = { app, io, server,getReceiverSocketId };



const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

app.use(cors({
    origin: 'https://your-vercel-app-url.vercel.app', // Replace with your Vercel app URL
    methods: ['GET', 'POST'],
    credentials: true // If needed
}));

const io = new Server(server, {
    cors: {
        origin: 'https://your-vercel-app-url.vercel.app',
        methods: ['GET', 'POST'],
        credentials: true // Allow cookies if needed
    }
});

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('sendMessage', (message) => {
        console.log('Message received:', message);
        // Broadcast message to all users
        socket.broadcast.emit('receiveMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(8090, () => {
    console.log('Server running on port 8090');
});
