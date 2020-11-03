import express from 'express'
import { homeController, errorController } from '../../controllers/common'

const CommonRouter = express.Router()

CommonRouter.get('/home', homeController)
CommonRouter.get('/error', errorController)

export = CommonRouter
