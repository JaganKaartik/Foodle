import express from 'express'
import { root, error, testRoute } from '../controllers/main'

const mainRouter = express.Router()

mainRouter.get('/', root)
mainRouter.get('/error', error)
mainRouter.get('/test', testRoute)

export = mainRouter
