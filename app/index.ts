import express from 'express'
import connectDB from './config/database'
import middlewareInit from './middleware'

const app = express()

connectDB()
middlewareInit()

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log('Server Started Successfully')
})
