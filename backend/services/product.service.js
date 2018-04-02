const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const CategoryService = require('./category.service')
const BrandService = require('./brand.service')

const ProductService = {
  getAll: () => {
    return Product.find().populate('brand').populate('categories')
  },
  getByCategory: async category => {
    try {
      const cat = await CategoryService.getOneByLink(category)
      return Product.find({categories: cat._id}).populate('brand').populate('categories')
    } catch (e) {
      return Promise.reject(e)
    }
  },
  getByBrand: async brand => {
    try {
      const br = await BrandService.getOneByLink(brand)
      return Product.find({brand: br._id}).populate('brand').populate('categories')
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

module.exports = ProductService
