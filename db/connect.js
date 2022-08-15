import mongoose from 'mongoose'

const connectDB = (url) =>{
    mongoose.connect(url)
    mongoose.connection.on('connected', ()=>{
        console.log('DB connected successfully')
    })
}

export default connectDB