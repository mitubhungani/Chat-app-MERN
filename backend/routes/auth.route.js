const express = require("express");
const { login, singup, logout } = require("../controllers/auth.controllers.js");

const router = express.Router();

router.post("/signup", singup);

router.post("/login", login);

router.post("/logout", logout);

module.exports = router;
