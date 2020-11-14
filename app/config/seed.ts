import Dish from '../models/dish'

import seedData = require('./seed.json')

const seed = async () => {
  await Dish.insertMany(seedData)
    .then((res) => {
      console.log('Successfully inserted seed items!')
    })
    .catch((err) => console.error(`Failed to insert documents: ${err}`))
}

if (process.env.NODE_ENV === 'prod-local') {
  console.log('Production Env: Adding Seed Data')
  seed()
}
