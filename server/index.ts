import express from 'express'
import connectDB from './config/database'
import Middleware from './middleware'
import { PORT } from './config/default.config'

const app = express()

connectDB()
app.set('trust proxy', 1)
app.use(Middleware)

const port = PORT || 7000

console.log(process.env)

app.listen(port, () => {
  console.log('Server Started Successfully')
})
