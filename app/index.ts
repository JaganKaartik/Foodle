import express from 'express'
import { connectDB } from './config/database'
import Middleware from './middleware'
import seed from './config/seed'

require('dotenv').config()

const app = express()

connectDB()
app.use(Middleware)

if (process.env.NODE_ENV === 'prod-local') {
  seed()
}

const port = process.env.PORT || 7000

app.listen(port, () => {
  console.log('Server Started Successfully')
})
