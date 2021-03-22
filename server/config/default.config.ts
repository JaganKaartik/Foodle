require('dotenv').config({ path: `.env.${process.env.APP_ENV}` })

const {
  PORT,
  MONGO_URL,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  COOKIE_KEY,
  CLIENT_HOME,
  CLIENT_LOGIN,
  CLIENT_ORIGIN,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  JWT_TOKEN,
  CLIENT_URL_DEV,
  CLIENT_URL_PROD
} = process.env

export {
  PORT,
  MONGO_URL,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  COOKIE_KEY,
  CLIENT_HOME,
  CLIENT_LOGIN,
  CLIENT_ORIGIN,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  JWT_TOKEN,
  CLIENT_URL_DEV,
  CLIENT_URL_PROD
}
