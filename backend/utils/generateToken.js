const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateTokenAndSetCookie = (userId, res) => {
  const secret = process.env.JWT_SECRET ;
  const token = jwt.sign({ userId }, secret, {
    expiresIn: "15d",
  });


  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secret: process.env.NODE_ENV,
  });
};

// console.log(process.env.JWT_SECRET);

module.exports = generateTokenAndSetCookie;