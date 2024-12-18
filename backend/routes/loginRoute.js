const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = new express.Router();

router.use(express.json());
const adminModel = require('../models/adminData');
const securityModel = require('../models/securityData')

router.post('/',async(req,res) => {
    try{
        const { email, password } = req.body;
        let user = await adminModel.findOne({ email });
        if(!user){
            user = await securityModel.findOne({ email });
        }
        if(!user){
             res.status(200).send("Invalid Username");
             return
        }
        isValid = await bcrypt.compare(password,user.password);
        if(!isValid){
            res.status(200).send("Incorrect Password");
            return
        }
        const token = jwt.sign({ user }, process.env.SECRET_KEY);
        res.send({ role:user.role, token});
    }catch(err){
        res.status(404).send(err);
    }
})

router.get('/authenticate',async(req,res) => {
    try{
        const token = req.headers.authorization?.split(' ')[1];
        console.log(token);
        if(!token){
            res.status(403);
        }
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if(err) return res.user = null;
            console.log(user);
            res.status(200).send(user);
        })
    }catch(err){
            res.status(404).send(err)
    }
})

module.exports = router;