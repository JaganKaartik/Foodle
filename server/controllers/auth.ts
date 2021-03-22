import jwt from 'jsonwebtoken'

const passport = require('passport')
const {
  NODE_ENV,
  CLIENT_URL_PROD,
  CLIENT_URL_DEV,
  JWT_SECRET
} = require('../config/default.config')

console.log(NODE_ENV)
console.log(JWT_SECRET)

const clientUrl = NODE_ENV === 'production' ? CLIENT_URL_PROD : CLIENT_URL_DEV

const authGoogle = passport.authenticate('google', {
  scope: ['email', 'profile']
})

const authRedirectGoogle = (req, res) => {
  passport.authenticate('google', {
    failureRedirect: '/',
    session: false
  })
  const token = jwt.sign(
    {
      data: req.user
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  )
  res.redirect(`${clientUrl}?token=${token}`)
}

const authTwitter = passport.authenticate('twitter')

const authRedirectTwitter = (req, res) => {
  passport.authenticate('twitter', {
    failureRedirect: '/',
    session: false
  })
  console.log(NODE_ENV)
  console.log(JWT_SECRET)
  const token = jwt.sign(
    {
      data: req.user
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  )
  res.redirect(`${clientUrl}?token=${token}`)
}

const logout = (req, res) => {
  req.logout()
  res.redirect(clientUrl)
}

export {
  authGoogle,
  authRedirectGoogle,
  authTwitter,
  authRedirectTwitter,
  logout
}
