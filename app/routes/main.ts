import express from 'express'
import { root, error } from '../controllers/main'

const mainRouter = express.Router()

mainRouter.get('/', root)
mainRouter.get('/error', error)

export = mainRouter
