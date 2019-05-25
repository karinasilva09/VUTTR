const express = require('express')

class App {
  constructor() {
    this.express = express()
    this.idDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.express.use(express.urlencoded({ extended: false }))
  }

  routes() {

  }
}

module.exports = new App().express
