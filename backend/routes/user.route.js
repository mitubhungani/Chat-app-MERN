const express = require('express');
const protectRoute = require('../middleware/protectRoute');
const getUserForSidebar = require('../controllers/user.controllers');

const router = express.Router();

router.get('/',protectRoute,getUserForSidebar)

module.exports = router