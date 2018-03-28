const CONFIG = require('../config/config')
const mongoose = require('mongoose')
mongoose.connect(CONFIG.DB_URL + CONFIG.DB_NAME)

module.exports = (app) => {
  /**
   * Public routes
   */
  require('./public')(app)
}
