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
  app.get('/api/products/:type/:name', async (req, res) => {
    const productType = req.params.type
    const typeName = req.params.name
    try {
      let products = []
      if (productType === 'brand') products = await ProductService.getByBrand(typeName)
      else if (productType === 'category') products = await ProductService.getByCategory(typeName)
      else {
        res.json({status: 404})
        return
      }
      res.json({status: 200, data: products})
    } catch (e) {
      res.json({status: 404})
    }
  })
}
