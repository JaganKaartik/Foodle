import express from 'express'
import { connectDB } from './config/database'
import Middleware from './middleware'

const app = express()

connectDB()
app.use(Middleware)

const port = process.env.PORT || 7000

app.listen(port, () => {
  console.log('Server Started Successfully')
})
