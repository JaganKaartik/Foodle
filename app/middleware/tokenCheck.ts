const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/default.config.ts')

export default (req, res, next) => {
  const token = req.header('x-auth-token')
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
  } catch (e) {
    res.status(401).json({
      authenticated: false,
      message: 'token is not valid'
    })
  }
}
