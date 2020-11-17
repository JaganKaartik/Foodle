const passport = require('passport')

require('dotenv').config()

const { CLIENT_HOME_PAGE_URL } = process.env

const authGoogle = passport.authenticate('google', {
  scope: ['email', 'profile']
})

const authRedirectGoogle = passport.authenticate('google', {
  successRedirect: CLIENT_HOME_PAGE_URL,
  failureRedirect: '/auth/status'
})

const authTwitter = passport.authenticate('twitter')

const authRedirectTwitter = passport.authenticate('twitter', {
  successRedirect: CLIENT_HOME_PAGE_URL,
  failureRedirect: '/auth/status'
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
  res.redirect('/auth/status')
}

const test = (req, res) => {
  res.send({ user: req.user })
}

export {
  authGoogle,
  authRedirectGoogle,
  authTwitter,
  authRedirectTwitter,
  authStatus,
  logout,
  test
}
