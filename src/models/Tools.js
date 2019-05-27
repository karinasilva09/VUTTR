const mongoose = require('mongoose')

const Tools = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  link: {
    type: String,
    //require: true
  },
  description: {
    type: String,
    //require: true
  },
  tags: [String]
})

module.exports = new mongoose.model("Tools", Tools)
