import express from 'express'
import { authGoogle, authRedirectHandler, logout } from '../controllers/auth'

const passport = require('passport')

const authRouter = express.Router()

authRouter.get('/google', authGoogle)
authRouter.get(
  '/google/redirect',
  passport.authenticate('google', {
    failureRedirect: '/',
    session: true
  }),
  authRedirectHandler
)

authRouter.get('/logout', logout)

export = authRouter
