const passport = require('passport')
const TwitterStrategy = require('passport-twitter')
const GoogleStrategy = require('passport-google-oauth2')
const User = require('../models/user')

require('dotenv').config()

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user)
    })
    .catch((e) => {
      done(new Error('Failed to deserialize an user'))
    })
})

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: '/auth/twitter/redirect'
    },
    async (token, tokenSecret, profile, done) => {
      console.log(profile)
      const currentUser = await User.findOne({
        userId: profile._json.id_str
      })
      if (!currentUser) {
        const newUser = await new User({
          userId: profile._json.id_str,
          provider: profile.proivider,
          name: profile._json.name,
          profileImageUrl: profile._json.profile_image_url,
          screenName: profile._json.screen_name
        }).save()
        if (newUser) {
          done(null, newUser)
        }
      }
      done(null, currentUser)
    }
  )
)

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
      passReqToCallback: true
    },
    async (token, tokenSecret, profile, done) => {
      const currentUser = await User.findOne({
        userId: profile._json.sub
      })
      if (!currentUser) {
        const newUser = await new User({
          userId: profile._json.sub,
          provider: profile.proivider,
          name: profile._json.name,
          profileImageUrl: profile._json.picture,
          email: profile._json.email
        }).save()
        if (newUser) {
          done(null, newUser)
        }
      }
      done(null, currentUser)
    }
  )
)
