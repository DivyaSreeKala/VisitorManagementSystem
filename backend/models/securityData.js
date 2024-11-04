
const mongoose = require("mongoose");

const securitySchema = mongoose.Schema({
    fullName:String,
    email:String,
    phoneNo:Number,
    address:String,
    role:String,
    password:String,
    createdAt:Date
})

const securityModel = mongoose.model('security',securitySchema);

module.exports = securityModel;