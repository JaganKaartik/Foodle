import express from 'express'
import {
  getAllDish,
  getDish,
  deleteDish,
  updateDish
} from '../../controllers/api'

const apiRouter = express.Router()

apiRouter.get('/dish/all', getAllDish)
apiRouter.get('/dish/:id', getDish)
apiRouter.delete('/dish/:id', deleteDish)
apiRouter.put('/dish/', updateDish)

export = apiRouter
