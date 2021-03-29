import connectDB from './database'
import seedData = require('./seed.json')

const Dishes = require('../models/dish')

const seed = async () => {
  await Dishes.deleteMany({})
  await Dishes.insertMany(seedData)
}

connectDB()
seed()

export = seed
