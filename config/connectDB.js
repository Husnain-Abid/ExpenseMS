const mongoose = require("mongoose")
const colors = require("colors")

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.Database_URL)
        console.log(`database successfull connect `.bgBlue);
        // console.log(`database successfull connect ${mongoose.connection.host}`.bgBlue);
    } catch (error) {
        console.log(`fail db connection ${error}`.bgRed);
    }
}

module.exports = connectDB