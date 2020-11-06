import mongoose from 'mongoose'

const { Schema } = mongoose

const dishSchema = new Schema({
  id: Number,
  name: String,
  type: String,
  price: String
})

export = mongoose.model('dishes', dishSchema)
