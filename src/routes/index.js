'use strict'
const express = require('express')
const router = express.Router()
const notificationsRouter = require('./notifications.route')

router.use('/notifications', notificationsRouter) // mount auth paths

module.exports = router