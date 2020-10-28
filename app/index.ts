import express from 'express'

const routes = './routes'
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.PORT || 5000

const mongoDB = process.env.mongoDB_URL || ''
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/routes', routes)

app.listen(port, () => {
  console.log('Server Started Successfully')
})
