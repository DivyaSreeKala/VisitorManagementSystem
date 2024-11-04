
const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
    fullName:String,
    email:String,
    phoneNo:Number,
    address:String,
    department:String,
    purposeOfVisit:String,
    idType:String,
    idProof:String,
    // createdAt:Date,
    timestamps: { createdAt: {
                            type: Date,
                            default: Date.now
                            },
                    updatedAt: {
                            type: Date,
                            default: Date.now
                            }
                } ,
    status:String,
    dateAlloted:Date,
    timeIn:Date,
    timeOut:Date,
    uniqueCode:String,
    securityId:String

})

const visitorModel = mongoose.Model('visitor', visitorSchema);

module.exports = visitorModel;