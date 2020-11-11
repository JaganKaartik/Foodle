import express from 'express'
import { auth, authRedirect, authStatus, logout } from '../controllers/auth'

const authRouter = express.Router()

require('dotenv').config()

const CLIENT_HOME_PAGE_URL = process.env.CLIENT_HOME_PAGE_URL || ''

authRouter.get('/twitter', auth)
authRouter.get('/twitter/redirect', authRedirect)
authRouter.get('/status', authStatus)
authRouter.get('/logout', logout)

export = authRouter
