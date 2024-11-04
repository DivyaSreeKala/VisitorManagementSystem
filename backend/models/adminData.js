
const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    role:String,
    createdAt:Date
})

const adminModel = mongoose.model('admin',adminSchema);

module.exports = adminModel;