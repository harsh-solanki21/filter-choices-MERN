const express = require('express')
const cors = require('cors')
const connectToMongo = require('./db')
require('dotenv').config({ path: './config.env' })
const eventRoutes = require('./routes/eventRoutes')

connectToMongo()
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.use(eventRoutes)

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`)
})
