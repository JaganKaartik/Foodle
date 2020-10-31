import express from 'express'
import db from './config/db'

const app = express()

const port = process.env.PORT || 5000
const routes = require('./routes/api')

app.use('/routes', routes)
app.use(db)

app.listen(port, () => {
  console.log('Server Started Successfully')
})
