const ProductService = require('../../services/product.service')

module.exports = (app) => {
  app.get('/api/products', async (req, res) => {
    try {
      const products = await ProductService.getAll()
      res.json({status: 200, data: products})
    } catch (e) {
      res.json({status: 404})
    }
  })
}
