const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Brand', new Schema({
  name: {type: String, required: true},
  link: {type: String, unique: true, required: true}
}))
