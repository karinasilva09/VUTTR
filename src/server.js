const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

class App {

  constructor() {
    mongoose.connect('mongodb+srv://vuttr:vuttr@cluster0-bb7as.mongodb.net/vuttr?retryWrites=true', {
      useNewUrlParser: true
    })

    this.express = express()
    this.idDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.express.use(bodyParser.urlencoded({ extended: true }))
    this.express.use(bodyParser.json())
  }

  routes() {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
