const express = require('express')
const routes = express.Router()
const ToolsController = require('./controllers/ToolsController')

routes.get('/tools', ToolsController.findAll)
routes.get('/tools/:tag', ToolsController.findByTag)

routes.post('/tools', ToolsController.store)

module.exports = routes
