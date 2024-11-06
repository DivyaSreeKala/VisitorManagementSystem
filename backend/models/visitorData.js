
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
        required:false
    },
    
    status:{
        type:String,
        enum:["pending","approved","rejected"],
        default:"pending"
    },
    // dateAlloted:Date,
    timeIn:Date,
    timeOut:Date,
    uniqueCode:String,
    securityId:String

    },{
        timestamps:true
    }
)

const visitorModel = mongoose.model('visitor', visitorSchema);

module.exports = visitorModel;