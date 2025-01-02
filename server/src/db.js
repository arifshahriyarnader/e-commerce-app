const mongoose = require('mongoose')
const { appConfig } = require('./config/index');
const uri = appConfig.DB.MONGODB_URI

const connectDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log('MongoDB Connected')
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = connectDB