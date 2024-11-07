const express = require("express");
const bcrypt = require("bcrypt");
const router = new express.Router();

const adminModel = require('../models/adminData');
const securityModel = require('../models/securityData')

router.post('/login',async(req,res) => {
    try{
        const { email, password } = req.body;
        const user = await adminModel.findOne({ email })
        if(!user){
            user = await securityModel.findOne({ email });
        }
        console.log(user);
        if(!user){
             res.status(200).send("Invalid Username");
             return
        }
        isValid = await bcrypt.compare(password,user.password);
        if(!isValid){
            res.sttus(200).send("Incorrect Password");
            return
        }
        res.send("login successfull");
    }catch(err){
        res.status(404).send(err);
    }
})

module.exports = router;