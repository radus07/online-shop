const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = (app) => {
  app.get('/api/products', (req, res) => {
    Product.find()
      .populate('brand')
      .populate('categories')
      .exec((err, result) => {
        if (err || result.length === 0) res.json({status: 404})
        else res.json({status: 200, data: result})
      })
  })
}
