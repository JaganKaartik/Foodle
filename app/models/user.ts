import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
  userId: String,
  provider: String,
  name: String,
  profileImageUrl: String,
  otherInfo: String
})

export = mongoose.model('user', userSchema)
