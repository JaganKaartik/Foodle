import express from 'express'
import {
  addDish,
  getAllDish,
  getDish,
  deleteDish,
  updateDish
} from '../controllers/api'
import authCheck from '../middleware/auth-check'

const { check } = require('express-validator')

const apiRouter = express.Router()

apiRouter.get('/dish/all', authCheck, getAllDish)
apiRouter.get('/dish/:id', authCheck, [check('id').exists()], getDish)
apiRouter.delete('/dish/:id', authCheck, [check('id').exists()], deleteDish)
apiRouter.put(
  '/dish/',
  authCheck,
  [
    check('name').exists().isString().notEmpty(),
    check('price').exists().isString().notEmpty()
  ],
  updateDish
)
apiRouter.post(
  '/dish/',
  authCheck,
  [
    check('name').exists().isString().notEmpty(),
    check('type').exists().isString().notEmpty(),
    check('price').exists().isString().notEmpty()
  ],
  addDish
)

export = apiRouter
