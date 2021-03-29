import express from 'express'
import {
  authGoogle,
  authRedirectGoogle,
  authTwitter,
  authRedirectTwitter,
  logout
} from '../controllers/auth'

const passport = require('passport')

const authRouter = express.Router()

authRouter.get('/google', authGoogle)
authRouter.get(
  '/google/redirect',
  passport.authenticate('google', {
    failureRedirect: '/',
    session: true
  }),
  authRedirectGoogle
)
authRouter.get('/twitter', authTwitter)
authRouter.get(
  '/twitter/redirect',
  passport.authenticate('twitter', {
    failureRedirect: '/',
    session: false
  }),
  authRedirectTwitter
)
authRouter.get('/logout', logout)

export = authRouter
