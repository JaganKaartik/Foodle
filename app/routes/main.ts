import express from 'express'
import { root, developer, error } from '../controllers/main'

const mainRouter = express.Router()

mainRouter.get('/', root)
mainRouter.get('/developer/', developer)
mainRouter.get('/error', error)

export = mainRouter
