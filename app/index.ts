import express from 'express'
import { connectDB } from './config/database'
import Middleware from './middleware'

const app = express()
const bodyParser = require('body-parser')

connectDB()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(Middleware)

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log('Server Started Successfully')
})
