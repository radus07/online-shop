const mongoose = require('mongoose')
const Category = mongoose.model('Category')

const CategoryService = {
  getAll: () => {
    return Category.find()
  },
  getOneByLink: link => {
    return Category.findOne({link: {$regex: new RegExp(`^${link}$`, 'i')}})
  }
}

module.exports = CategoryService
