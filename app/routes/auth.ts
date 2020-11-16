import express from 'express'
import {
  authGoogle,
  authRedirectGoogle,
  authTwitter,
  authRedirectTwitter,
  authStatus,
  logout
} from '../controllers/auth'

const authRouter = express.Router()

authRouter.get('/google', authGoogle)
authRouter.get('/google/redirect', authRedirectGoogle)
authRouter.get('/twitter', authTwitter)
authRouter.get('/twitter/redirect', authRedirectTwitter)
authRouter.get('/status', authStatus)
authRouter.get('/logout', logout)

export = authRouter
