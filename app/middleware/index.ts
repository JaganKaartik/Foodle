import express from 'express'
import { apiRouter, authRouter, commonRouter } from '../routes'

const Middleware = express()

const middlewareInit = () => {
  Middleware.use(commonRouter)
  Middleware.use('/api', apiRouter)
  Middleware.use('/auth', authRouter)
}

export = middlewareInit
