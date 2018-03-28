const express = require('express')
const parser = require('body-parser')
const app = express()

app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'content-type')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})

require('./routes')(app)

app.listen(8083, () => {
  console.log('Server is listening on port 8083')
})
