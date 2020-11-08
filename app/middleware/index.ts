import express from 'express'
import { apiRouter, authRouter, commonRouter } from '../routes'

require('dotenv').config()

const Middleware = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')
const passportSetup = require('../config/passport-setup')

Middleware.use(
  cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100
  })
)

// Parse cookies
Middleware.use(cookieParser())

// Initalize passport
Middleware.use(passport.initialize())

// Deserialize cookie from the browser
Middleware.use(passport.session())

// Cors
Middleware.use(
  cors({
    origin: process.env.CLIENT_HOME_PAGE_URL || '', // allow to server to accept request from different origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // allow session cookie from browser to pass through
  })
)

Middleware.use(bodyParser.urlencoded({ extended: false }))
Middleware.use(bodyParser.json())
Middleware.use(commonRouter)
Middleware.use('/api', apiRouter)
Middleware.use('/auth', authRouter)

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: 'user has not been authenticated'
    })
  } else {
    next()
  }
}

// if it's already login, send the profile response,
// otherwise, send a 401 response that the user is not authenticated
// authCheck before navigating to home page
Middleware.get('/', authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: 'user successfully authenticated',
    user: req.user,
    cookies: req.cookies
  })
})

export = Middleware
