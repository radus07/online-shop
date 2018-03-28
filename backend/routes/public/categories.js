const Category = require('../../models/category')

module.exports = (app) => {
  app.get('/api/categories', (req, res) => {
    Category.find({}, (err, result) => {
      if (err || result.length === 0) res.json({status: 404})
      else res.json({status: 200, data: result})
    })
  })
}
