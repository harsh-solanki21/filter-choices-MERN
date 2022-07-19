const express = require('express')
const router = express.Router()
const eventController = require('../controller/eventController')

router.get('/', eventController.getEvents)

router.get('/query', eventController.queryParams)

router.post('/', eventController.addEvent)

module.exports = router
