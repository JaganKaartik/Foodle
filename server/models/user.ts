import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
  userId: String,
  provider: String,
  name: String,
  profileImageUrl: String,
  otherInfo: String,
  location: String,
  profileBannerUrl: String,
  role: String
})

export = mongoose.model('user', userSchema)
