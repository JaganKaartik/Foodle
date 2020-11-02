import express from 'express'
import connectDB from './config/database'

const app = express()

connectDB()

const port = process.env.PORT || 4000
const routes = require('./routes/api')

app.use('/routes', routes)

app.listen(port, () => {
  console.log('Server Started Successfully')
})
