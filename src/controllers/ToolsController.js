const Tools = require('../models/Tools')

class ToolsController {
  async findAll(req, res) {
    const tools = await Tools.find()
    return res.json(tools)
  }

  async findByTag(req, res) {
    console.log(req.params.tag)
    const tools = await Tools.find()
      .where('likes')
      .in([req.params.tag])
    return res.json(tools)
  }

  async store(req, res) {
    console.log(req.body)
    const tools = await Tools(req.body)
    tools.save().then()
    res.json(tools)
  }
}

module.exports = new ToolsController()
