const BrandService = require('../../services/brand.service')

module.exports = (app) => {
  app.get('/api/brands', async (req, res) => {
    try {
      const brands = await BrandService.getAll()
      res.json({status: 200, data: brands})
    } catch (e) {
      res.json({status: 404})
    }
  })
}
