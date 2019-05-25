const express = require('express')
const mongoose = require('mongoose')

class App {
  constructor() {
    this.express = express()
    this.idDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.routes()

    mongoose.connect('mongodb+srv://vuttr:vuttr@cluster0-bb7as.mongodb.net/vuttr?retryWrites=true', {
      useNewUrlParser: true
    })
  }

  middlewares() {
    this.express.use(express.urlencoded({ extended: false }))
  }

  routes() {

  }
}

module.exports = new App().express
