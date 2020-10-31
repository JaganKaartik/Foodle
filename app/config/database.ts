import { ConnectionOptions, connect } from 'mongoose'

require('dotenv').config()

console.log(process.env)

const connectDB = async () => {
  try {
    const mongoURI = process.env.mongoDB_URL || ''
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
    await connect(mongoURI, options)
    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

export default connectDB
