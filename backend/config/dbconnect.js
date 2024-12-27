const mongoose = require("mongoose");
// require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log("connect to MongoDB");
  } catch (error) {
    console.error('db error',error.message);
  }
};

module.exports = connectDB;
