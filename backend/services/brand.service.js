const mongoose = require('mongoose')
const Brand = mongoose.model('Brand')

const BrandService = {
  getAll: () => {
    return Brand.find()
  },
  getOneByLink: link => {
    return Brand.findOne({link: {$regex: new RegExp(`^${link}$`, 'i')}})
  }
}

module.exports = BrandService
