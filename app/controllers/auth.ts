const passport = require('passport')

require('dotenv').config()

const CLIENT_HOME_PAGE_URL = process.env.CLIENT_HOME_PAGE_URL || ''

const loginFailed = (res, req) => {
  res.status(401).json({
    success: false,
    message: 'user failed to authenticate.'
  })
}

const logout = (res, req) => {
  delete req.user
  res.redirect(CLIENT_HOME_PAGE_URL)
}

const loginSuccess = (res, req) => {
  if (req.user) {
    res.json({
      success: true,
      message: 'user has successfully authenticated',
      user: req.user,
      cookies: req.cookies
    })
  }
}

const authRedirect = () => {
  passport.authenticate('twitter', {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: '/auth/login/failed'
  })
}

const auth = () => {
  passport.authenticate('twitter')
}

export { loginSuccess, loginFailed, auth, authRedirect, logout }
