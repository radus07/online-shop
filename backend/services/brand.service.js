const mongoose = require('mongoose')
const Brand = mongoose.model('Brand')

const BrandService = {
  getAll: () => {
    return Brand.find()
  },
  getOneByName: name => {
    return Brand.findOne({name: name})
  }
}

module.exports = BrandService
