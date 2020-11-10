const passport = require('passport')

require('dotenv').config()

const CLIENT_HOME_PAGE_URL = process.env.CLIENT_HOME_PAGE_URL || ''

const auth = () => {
  passport.authenticate('twitter')
}

const authRedirect = () => {
  passport.authenticate('twitter', {
    successRedirect: '/auth/status',
    failureRedirect: '/auth/status'
  })
}

const authStatus = (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: 'user has successfully authenticated',
      user: req.user,
      cookies: req.cookies
    })
  } else {
    res.status(401).json({
      success: false,
      message: 'user failed to authenticate.'
    })
  }
}

const logout = (req, res) => {
  delete req.user
  res.redirect(CLIENT_HOME_PAGE_URL)
}

export { auth, authRedirect, authStatus, logout }
