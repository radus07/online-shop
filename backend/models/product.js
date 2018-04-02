const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.model('Product', new Schema({
  title: {type: String, required: true},
  description: String,
  images: [String],
  link: {type: String, unique: true, required: true},
  brand: {type: Schema.Types.ObjectId, ref: 'Brand'},
  categories: [{type: Schema.Types.ObjectId, ref: 'Category'}]
}))
