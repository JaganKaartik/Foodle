import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
  name: String,
  screenName: String,
  twitterId: String,
  profileImageUrl: String
})

export = mongoose.model('user', userSchema)
