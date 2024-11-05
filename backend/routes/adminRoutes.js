
const express = require("express");
const bcrypt = require("bcrypt");
const router = new express.Router();

const adminModel = require('../models/adminData');

router.use(express.json());
router.use(express.urlencoded({extended : true}));

router.get('/:id',async(req,res) => {
    try{
        const data = await adminModel.findById(req.params.id);
        console.log(data);
        res.status(200).send(data);
    }catch(err){
        res.status(404).send(err);
        console.log(err);
    }
})

router.put('/edit-admin/:id',async(req,res) => {
    try{
        const id = req.params.id;
        const data = adminModel.findOneAndUpdate(id, req.body);
        res.status(200).send('Post Succesfull');
    }catch(err){
        req.status(404).send(err);
    }
});

router.post('/add',async(req, res) => {
    try{
        const requestData = req.body;
        const hashPassword = await bcrypt.hash(req.body.password,13);
        requestData.password = hashPassword;

        const data = new adminModel(requestData); 
        const savedData = await data.save();
        res.status(200).send(savedData);
    }catch(err){
        res.status(404).send(err);
    }
})

router.post('/login',async(req,res) => {
    try{
        const { email, password } = req.body;
        const user = await adminModel.findOne({ email })
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