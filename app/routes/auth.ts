import express from 'express'
import { auth, authRedirect, authStatus, logout } from '../controllers/auth'

const authRouter = express.Router()

// auth with twitter
authRouter.get('/twitter', auth)

// when login is successful, retrieve user info
authRouter.get('/status', authStatus)

// redirect to home page after successfully login via twitter
authRouter.get('/twitter/redirect', authRedirect)

// When logout, redirect to client
authRouter.get('/logout', logout)

export = authRouter
