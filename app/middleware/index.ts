import express from 'express'
import { apiRouter, authRouter, mainRouter } from '../routes'

const Middleware = express()
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')
const passportSetup = require('../config/passport-setup')
const { CLIENT_ORIGIN } = require('../config/default.config')

Middleware.use(
  cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100
  })
)

Middleware.use(cookieParser())

Middleware.use(passport.initialize())
Middleware.use(passport.session())

Middleware.use(
  cors({
    origin: CLIENT_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: true,
    credentials: true
  })
)

Middleware.use(bodyParser.urlencoded({ extended: false }))
Middleware.use(bodyParser.json())
Middleware.use('/', mainRouter)
Middleware.use('/auth', authRouter)
Middleware.use('/api/v1', apiRouter)

export = Middleware
