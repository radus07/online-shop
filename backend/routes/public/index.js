module.exports = (app) => {
  /**
   * Add all public routes here
   */
  require('./products')(app)
  require('./brands')(app)
  require('./categories')(app)
}
