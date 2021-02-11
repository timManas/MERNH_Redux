import path from 'path'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRoutes from './productRoutes.js'

// Initialize Dot Env File
dotenv.config()

// Initialize Express
const app = express()

// Initialize MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1) // exit(1) - means you return with error
  }
}

// Connect Backend to MongoDB
connectDB()

// Make the upload folder static
const __dirname = path.resolve()

// Initialize the Routes
if (process.env.NODE_ENV === 'production') {
  // Set the 'build' folder as a static folder
  // Why ? So we can access the build folder and load the index.html
  app.use(express.static(path.join(__dirname, '/frontend/build'))) // set frontend folder as a static folder

  // Send the index.html file if on Production
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running ....')
  })
}

// Setup Routes
app.use('/api/products', productRoutes)

// Set up backend to listen to PORT 5000
const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
