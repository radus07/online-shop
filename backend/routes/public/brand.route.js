const mongoose = require('mongoose')
const Brand = mongoose.model('Brand')

module.exports = (app) => {
  app.get('/api/brands', async (req, res) => {
    Brand.find({}, (err, result) => {
      if (err || result.length === 0) res.json({status: 404})
      else res.json({status: 200, data: result})
    })
  })
}
