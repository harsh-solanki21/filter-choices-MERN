const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Event = new Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
})

const eventModel = mongoose.model('events', Event)

module.exports = eventModel
