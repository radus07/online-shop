const Product = require('../../models/product')

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
