import { ConnectionOptions, connect } from 'mongoose'

require('dotenv').config()

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URL || ''
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
