import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('<h1>Welcome</h1>')
})

export = router
