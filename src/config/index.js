require('dotenv').config() // load .env file

module.exports = {
  port: process.env.PORT,
  app: process.env.APP,
  mongo: {
    uri: process.env.MONGODB_URL
  },
}
