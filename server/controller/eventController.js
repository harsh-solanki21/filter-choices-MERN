const Event = require('../model/Event')

const getEvents = async (req, res) => {
  try {
    const event = await Event.find()
    res.status(200).send(event)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const addEvent = async (req, res) => {
  try {
    const { name, startDate, endDate, region, type, tags } = req.body
    console.log(tags)
    const event = new Event({
      name,
      startDate,
      endDate,
      region,
      type,
      tags,
    })
    await event.save()
    res.status(200).send(event)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const queryParams = async (req, res) => {
  try {
    const { startDate, endDate, region, type, tags } = req.query
    let filter = {}

    if (startDate !== undefined && startDate !== '') {
      filter.startDate = startDate
    }

    if (endDate !== undefined && endDate !== '') {
      filter.endDate = endDate
    }

    if (region !== undefined && region !== '') {
      filter.region = region
    }

    if (type !== undefined && type !== '') {
      filter.type = type
    }

    if (tags !== undefined && tags !== '') {
      filter.tags = tags
    }

    console.log(filter)

    const event = await Event.find(filter)
    res.status(200).send(event)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  getEvents,
  addEvent,
  queryParams,
}
