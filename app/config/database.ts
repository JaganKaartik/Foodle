import { ConnectionOptions, connect, connection } from 'mongoose'

const { MONGO_URL } = process.env

const connectDB = async () => {
  try {
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
    await connect(MONGO_URL || '', options)
    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

const db = connection

export { db, connectDB }
