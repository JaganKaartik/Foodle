import express from 'express'
import {
  addDish,
  getAllDish,
  getDish,
  deleteDish,
  updateDish
} from '../controllers/api'
import tokenCheck from '../middleware/tokenCheck'

const { check } = require('express-validator')

const apiRouter = express.Router()

apiRouter.get('/dish/all', tokenCheck, getAllDish)
apiRouter.get('/dish/:id', tokenCheck, [check('id').exists()], getDish)
apiRouter.delete('/dish/:id', tokenCheck, [check('id').exists()], deleteDish)
apiRouter.put(
  '/dish/',
  tokenCheck,
  [
    check('name').exists().isString().notEmpty(),
    check('price').exists().isString().notEmpty()
  ],
  updateDish
)
apiRouter.post(
  '/dish/',
  tokenCheck,
  [
    check('name').exists().isString().notEmpty(),
    check('type').exists().isString().notEmpty(),
    check('price').exists().isString().notEmpty()
  ],
  addDish
)

export = apiRouter
