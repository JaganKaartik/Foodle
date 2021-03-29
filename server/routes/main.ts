import express from 'express'
import { root, error, healthCheck } from '../controllers/main'

const mainRouter = express.Router()

mainRouter.get('/', root)
mainRouter.get('/error', error)
mainRouter.get('/health-check', healthCheck)

export = mainRouter
