
const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
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
    department:{
        type:String,
        required:true
    },
    purposeOfVisit:{
        type:String,
        required:true
    },
    idType:{
        type:String,
        required:true
    },
    idProof:{
        type:String,
        required:true
    },
    
    status:String,
    dateAlloted:Date,
    timeIn:Date,
    timeOut:Date,
    uniqueCode:String,
    securityId:String

    },{
        timestamps:true
    }
)

const visitorModel = mongoose.Model('visitor', visitorSchema);

module.exports = visitorModel;