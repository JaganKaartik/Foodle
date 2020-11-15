import seedData = require('./seed.json')

const Dishes = require('../models/dish')
require('dotenv').config()

const seed = () => {
  Dishes.insertMany(seedData)
    .then((res) => {
      console.log(`${res} Successfully inserted seed items! `)
    })
    .catch((err) => console.error(`Failed to insert documents: ${err}`))
}

if (process.env.NODE_ENV === 'prod-local') {
  seed()
}
