import express from 'express'
import {
  getAllDish,
  getDish,
  deleteDish,
  updateDish
} from '../../controllers/api'
import authCheck from '../../middleware/auth-check'

const apiRouter = express.Router()

apiRouter.get('/dish/all', authCheck, getAllDish)
apiRouter.get('/dish/:id', authCheck, getDish)
apiRouter.delete('/dish/:id', authCheck, deleteDish)
apiRouter.put('/dish/:id', authCheck, updateDish)

export = apiRouter
