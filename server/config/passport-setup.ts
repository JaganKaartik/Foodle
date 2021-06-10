const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2')
const User = require('../models/user')
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('./default.config')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user)
    })
    .catch(() => {
      done(new Error('Failed to deserialize an user'))
    })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
      passReqToCallback: true
    },
    async (request, accessToken, refreshToken, profile, done) => {
      await User.findOne({
        userId: profile._json.sub
      })
        .then((currentUser) => {
          if (!currentUser) {
            const newUser = new User({
              userId: profile._json.sub,
              provider: profile.provider,
              name: profile._json.name,
              profileImageUrl: profile._json.picture,
              otherInfo: profile._json.email,
              role: 'user'
            })
            newUser.save()
            done(null, newUser)
          } else {
            done(null, currentUser)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    }
  )
)
