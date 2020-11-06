import express from 'express'
import { apiRouter, authRouter, commonRouter } from '../routes'

const Middleware = express()
const bodyParser = require('body-parser')

Middleware.use(bodyParser.urlencoded({ extended: false }))
Middleware.use(bodyParser.json())
Middleware.use(commonRouter)
Middleware.use('/api', apiRouter)
Middleware.use('/auth', authRouter)

export = Middleware
