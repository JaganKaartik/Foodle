require('dotenv').config()

const { NODE_ENV } = process.env
const { MONGO_URL } = process.env
const { PORT } = process.env
const { TWITTER_CONSUMER_KEY } = process.env
const { TWITTER_CONSUMER_SECRET } = process.env
const { COOKIE_KEY } = process.env
const { CLIENT_HOME_PAGE_URL } = process.env
const { GOOGLE_CLIENT_ID } = process.env
const { GOOGLE_CLIENT_SECRET } = process.env
const { CLIENT_ORIGIN } = process.env

export {
  NODE_ENV,
  PORT,
  MONGO_URL,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  CLIENT_HOME_PAGE_URL,
  COOKIE_KEY,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  CLIENT_ORIGIN
}
