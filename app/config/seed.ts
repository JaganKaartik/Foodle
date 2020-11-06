import * as seedData from './seed.json'
import { db } from './database'

db.dishes.insert(seedData)
