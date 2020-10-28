import mongoose from 'mongoose'

const { Schema } = mongoose

const dishes = new Schema({
  id: Number,
  name: String,
  type: String,
  price: String
})

export = dishes
