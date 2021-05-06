'use strict'

const Notification = require("../models/notification.model")

exports.getALlNotifications = async (req, res) => {
  Notification
    .find()
    .sort({ createdAt: 'desc' })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error))
}

exports.getNotification = (req, res) => {
  Notification
    .findOne({ name: req.params.name })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error))
}

exports.addNotification = async (req, res) => {
  const notification = new Notification(req.body)
  await notification.save() 
  if (!notification) {
    return res.status(400).json({msg: 'cannot create'})
  }
  return res.status(200).json(notification)
}

exports.removeNotification = (req, res) => {
  Notification
    .findOneAndRemove({ name: req.params.name })
    .then(() => res.status(200).json({msg: 'removed'}))
    .catch(error => res.status(400).json(error))
}