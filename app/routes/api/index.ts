import express from 'express'
import { getAllDish, getDish } from '../../controllers/model/dish'

const apiRouter = express.Router()

apiRouter.get('/dish/all', getAllDish)
apiRouter.get('/dish/:id', getDish)

export = apiRouter
