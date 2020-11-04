import express from 'express'

const authRouter = express.Router()

authRouter.get('/test', () => {
  console.log('test')
})

export = authRouter
