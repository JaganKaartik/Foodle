import * as seedData from './seed.json'
import Dish from '../models/dish'

const seed = async () => {
  await Dish.insertMany(seedData)
}

export = seed
