const express = require('express')
const { sendMessage, getMessages } = require('../controllers/message.controllers.js')
const protectRoute = require('../middleware/protectRoute.js')

const router = express.Router()

router.get('/:id',protectRoute,getMessages)
router.post('/send/:id',protectRoute,sendMessage)

module.exports = router