import express from 'express'
import { auth, authRedirect } from '../controllers/auth'

const authRouter = express.Router()

require('dotenv').config()

const CLIENT_HOME_PAGE_URL = process.env.CLIENT_HOME_PAGE_URL || ''
// when login is successful, retrieve user info
authRouter.get('/status', (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: 'User has successfully authenticated',
      user: req.user,
      cookies: req.cookies
    })
  } else {
    res.status(401).json({
      success: false,
      message: 'user failed to authenticate.'
    })
  }
})

// When logout, redirect to client
authRouter.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/auth/status')
})

// auth with twitter
authRouter.get('/twitter', auth)

// redirect to home page after successfully login via twitter
authRouter.get('/twitter/redirect', authRedirect)

export = authRouter
