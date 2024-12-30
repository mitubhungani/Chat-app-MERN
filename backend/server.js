const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth.route.js"); // Use `require` for the routes
const messageRoutes = require("./routes/message.route.js");
const userRoutes = require("./routes/user.route.js");

const connectDB = require("./config/dbconnect.js");
const { app, server } = require("./socket/socket.js");

const PORT = process.env.PORT || 8090; // Fix typo: process.envPORT -> process.env.PORT
const no = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(no, "/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  connectDB();
});