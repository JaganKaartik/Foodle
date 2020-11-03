import express from 'express'
import { apiRouter, authRouter } from '../routes'

const Middleware = express()

const middlewareInit = () => {
  Middleware.use('/api', apiRouter)
  Middleware.use('/auth', authRouter)
}

export = middlewareInit
