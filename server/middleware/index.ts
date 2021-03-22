import express from 'express'
import { apiRouter, authRouter, mainRouter } from '../routes'

const Middleware = express()
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const referrerPolicy = require('referrer-policy')
const passportSetup = require('../config/passport-setup')
const { CLIENT_ORIGIN, COOKIE_KEY } = require('../config/default.config')

Middleware.use(
  cookieSession({
    name: 'session',
    keys: [COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100,
    secure: process.env.NODE_ENV === 'production',
    sameSite: false
  })
)

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 25,
  message:
    'Too many accounts created from this IP, please try again after a minute'
})

Middleware.use('/api/v1/', apiLimiter)

Middleware.use(cookieParser())

Middleware.use(passport.initialize())
Middleware.use(passport.session())

Middleware.use(async (req, res, next) => {
  await next()
  res.setHeader('Access-Control-Allow-Origin', [
    'https://foodle-app.netlify.app,http://localhost:3000,http://localhost:5000'
  ])
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
})

Middleware.use(
  cors({
    origin: [
      'https://foodle-app.netlify.app,http://localhost:3000,http://localhost:5000'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: true,
    credentials: true
  })
)

Middleware.use(referrerPolicy())

Middleware.use(bodyParser.urlencoded({ extended: false }))
Middleware.use(bodyParser.json())
Middleware.use('/', mainRouter)
Middleware.use('/auth', authRouter)
Middleware.use('/api/v1', apiRouter)

export = Middleware