import mongoose from 'mongoose'

const connectDB = async () => {
  if(mongoose.connections[0].readyState) {
    console.log('Already connected')
    return
  }

  mongoose.connect(process.env.PUBLIC_MONGO_DB, {} , err => {
    if(err) throw err
    console.log('Connected to MongoDB')
  })
}

export default connectDB