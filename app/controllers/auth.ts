const passport = require('passport')

const auth = passport.authenticate('twitter')

require('dotenv').config()

const CLIENT_HOME_PAGE_URL = process.env.CLIENT_HOME_PAGE_URL || ''

const authRedirect = passport.authenticate('twitter', {
  successRedirect: '/auth/status',
  failureRedirect: '/auth/status'
})

const authStatus = (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: 'User has successfully authenticated',
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
  req.logout()
  res.redirect('/auth/status')
}

export { auth, authRedirect, authStatus, logout }
