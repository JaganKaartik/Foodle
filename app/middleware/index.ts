import express from 'express'
import { apiRouter, authRouter, commonRouter } from '../routes'

const Middleware = express()

Middleware.use(commonRouter)
Middleware.use('/api', apiRouter)
Middleware.use('/auth', authRouter)

export = Middleware
