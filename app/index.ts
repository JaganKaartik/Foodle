import express from 'express'

const routes = './routes'
const app = express()

app.use('/routes', routes)
