import express from 'express'
import {
  loginSuccess,
  loginFailed,
  auth,
  authRedirect,
  logout
} from '../controllers/auth'

const authRouter = express.Router()
// when login is successful, retrieve user info
authRouter.get('/login/success', loginSuccess)

// when login failed, send failed msg
authRouter.get('/login/failed', loginFailed)

// When logout, redirect to client
authRouter.get('/logout', logout)

// auth with twitter
authRouter.get('/twitter', auth)

// redirect to home page after successfully login via twitter
authRouter.get('/twitter/redirect', authRedirect)

export = authRouter
