import * as seedData from './seed.json'
import Dish from '../models/dish'

const seed = async () => {
  await Dish.insertMany(seedData)
    .then((res) => {
      console.log('Successfully inserted seed items!')
    })
    .catch((err) => console.error(`Failed to insert documents: ${err}`))
}

export = seed
