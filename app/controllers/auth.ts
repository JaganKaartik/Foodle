const passport = require('passport')
const { CLIENT_HOME, CLIENT_LOGIN } = require('../config/default.config')

const authGoogle = passport.authenticate('google', {
  scope: ['email', 'profile']
})

const authRedirectGoogle = passport.authenticate('google', {
  successRedirect: CLIENT_HOME,
  failureRedirect: CLIENT_LOGIN
})

const authTwitter = passport.authenticate('twitter')

const authRedirectTwitter = passport.authenticate('twitter', {
  successRedirect: CLIENT_HOME,
  failureRedirect: CLIENT_LOGIN
})

const authStatus = (req, res) => {
  if (req.user) {
    res.status(200).send({
      success: true,
      message: 'User has successfully authenticated',
      user: req.user,
      cookies: req.cookies
    })
  } else {
    res.status(401).send({
      success: false,
      message: 'user failed to authenticate.'
    })
  }
}

const logout = (req, res) => {
  req.logout()
  res.redirect(CLIENT_LOGIN)
}

export {
  authGoogle,
  authRedirectGoogle,
  authTwitter,
  authRedirectTwitter,
  authStatus,
  logout
}
