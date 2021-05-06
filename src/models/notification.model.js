const mongoose = require('mongoose')

const notificationSchema = mongoose.Schema({
  name: String,
  code: String,
}, { timestamps: true })

const Notification = mongoose.model('Notification', notificationSchema)

module.exports = Notification