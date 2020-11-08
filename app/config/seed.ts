import * as seedData from './seed.json'
import Dish from '../models/dish'

const seed = () => {
  Dish.insertMany(seedData)
}

export = seed
