const CategoryService = require('../../services/category.service')

module.exports = (app) => {
  app.get('/api/categories', async (req, res) => {
    try {
      const categories = await CategoryService.getAll()
      res.json({status: 200, data: categories})
    } catch (e) {
      res.json({status: 404})
    }
  })
}
