import express from 'express'
import { auth, authRedirect, authStatus, logout } from '../controllers/auth'

const authRouter = express.Router()

authRouter.get('/twitter', auth)
authRouter.get('/twitter/redirect', authRedirect)
authRouter.get('/status', authStatus)
authRouter.get('/logout', logout)

export = authRouter
