import express from 'express'

const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.PORT || 5000
const routes = require('./routes/api')

const mongoDB = process.env.mongoDB_URL || 'mongodb://127.0.0.1:27017/foodle'
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

console.log(mongoose.connection.readyState)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/routes', routes)

app.listen(port, () => {
  console.log('Server Started Successfully')
})
