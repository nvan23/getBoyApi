const express = require('express')
const Notification = require('../controllers/notification.controller')

const router = express.Router()

router.get('/', Notification.getALlNotifications)
router.get('/:name', Notification.getNotification)
router.post('/', Notification.addNotification)
router.delete('/:name', Notification.removeNotification)

module.exports = router