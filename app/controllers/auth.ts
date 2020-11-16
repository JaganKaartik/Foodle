const passport = require('passport')
require('dotenv').config()

const CLIENT_HOME_PAGE_URL = process.env.CLIENT_HOME_PAGE_URL || ''

const authGoogle = passport.authenticate('google', {
  scope: ['email', 'profile']
})

const authRedirectGoogle = passport.authenticate('google', {
  successRedirect: '/auth/status',
  failureRedirect: '/auth/status'
})

const authTwitter = passport.authenticate('twitter')

const authRedirectTwitter = passport.authenticate('twitter', {
  successRedirect: '/auth/status',
  failureRedirect: '/auth/status'
})

const authStatus = (req, res) => {
  if (req.user) {
    res.status(200).json({
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

export {
  authGoogle,
  authRedirectGoogle,
  authTwitter,
  authRedirectTwitter,
  authStatus,
  logout
}
