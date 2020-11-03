import express from 'express'
import {
  rootController,
  homeController,
  errorController
} from '../../controllers/common'

const CommonRouter = express.Router()

CommonRouter.get('/', rootController)
CommonRouter.get('/home', homeController)
CommonRouter.get('/error', errorController)

export = CommonRouter
