import express from 'express'
import { homeController, errorController } from '../../controllers/common'
import authCheck from '../../middleware/auth-check'

const CommonRouter = express.Router()

// if it's already login, send the profile response,
// otherwise, send a 401 response that the user is not authenticated
// authCheck before navigating to home page
CommonRouter.get('/', authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: 'user successfully authenticated',
    user: req.user,
    cookies: req.cookies
  })
})

CommonRouter.get('/home', homeController)
CommonRouter.get('/error', errorController)

export = CommonRouter
