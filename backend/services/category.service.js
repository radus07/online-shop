const mongoose = require('mongoose')
const Category = mongoose.model('Category')

const CategoryService = {
  getAll: () => {
    return Category.find()
  },
  getOneByName: name => {
    return Category.findOne({name: name})
  }
}

module.exports = CategoryService
