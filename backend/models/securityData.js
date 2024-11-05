
const mongoose = require("mongoose");

const securitySchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    },{
        timestamps:true
    }
)

const securityModel = mongoose.model('security',securitySchema);

module.exports = securityModel;