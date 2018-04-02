module.exports = (app) => {
  /**
   * Add all public routes here
   */
  require('./product.route')(app)
  require('./brand.route')(app)
  require('./category.route')(app)
}
