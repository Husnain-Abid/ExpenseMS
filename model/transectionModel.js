const mongoose = require("mongoose")

const transectionSchema = new mongoose.Schema(
    {
        user_id: {
            type : String,
            required : [true , "amount is required"]
        },
        amount: {
            type : Number,
            required : [true , "amount is required"]
        },
        type: {
            type : String,
            required : [true , "category is required"]
        },
        category: {
            type : String,
            required : [true , "category is required"]
        },
        description: {
            type : String,
            required : [true , "description is required"]
        },
        date: {
            type : Date, 
            required : [true , "date is required"]
        }
    },{ timestamps: true }

)

const transectionModel = mongoose.model("transections", transectionSchema)

module.exports = transectionModel



