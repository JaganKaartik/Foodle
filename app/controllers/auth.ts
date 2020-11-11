const passport = require('passport')

const auth = passport.authenticate('twitter')

const authRedirect = passport.authenticate('twitter', {
  successRedirect: '/auth/status',
  failureRedirect: '/auth/login/failed'
})

export { auth, authRedirect }
