import express from 'express'
import { homeController, errorController } from '../controllers/common'
import authCheck from '../middleware/authCheck'

const CommonRouter = express.Router()

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
