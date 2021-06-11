import express from 'express'
import { apiRouter, authRouter, mainRouter } from '../routes'

const Middleware = express()
const passport = require('passport')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const passportSetup = require('../config/passport-setup')
const {
  NODE_ENV,
  CLIENT_URL_PROD,
  CLIENT_URL_DEV
} = require('../config/default.config')

const clientUrl = NODE_ENV === 'production' ? CLIENT_URL_PROD : CLIENT_URL_DEV

Middleware.use(cors({ credentials: true, origin: clientUrl }))

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  message:
    'Too many accounts created from this IP, please try again after a minute'
})

Middleware.use('/api/v1/', apiLimiter)

Middleware.use(passport.initialize())
Middleware.use(passport.session())

Middleware.use(express.urlencoded({ extended: true }))
Middleware.use(express.json())

Middleware.use('/', mainRouter)
Middleware.use('/auth', authRouter)
Middleware.use('/api/v1', apiRouter)

export = Middleware
