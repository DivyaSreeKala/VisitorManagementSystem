
const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

const securityModel = require('../models/securityData');


//post
router.post('/add',async(req,res) => {
    try{
        const requestData = req.body;
        const hashPassword = await bcrypt.hash(req.body.password,13);
        requestData.password = hashPassword;
    const data = new securityModel(requestData);
    const savedData = await data.save();
    res.status(200).send("Post Successfull");
    }catch(err){
        res.status(404).send(err);
    }
})

//update
router.put('/edit/:id',async(req,res) => {
    try{
        const id = req.params.id;
        const data = await securityModel.findOneAndUpdate({ _id: id }, req.body);
        res.status(200).send('Update Succesfull');
    }catch(err){
        res.status(404).send(err);
    }
});
//delete
router.delete('/delete/:id',async(req,res) => {
    try{
        const id = req.params.id;
        const data = await securityModel.findByIdAndDelete(id);
        res.status(200).send("deleted successfuly");
    }catch(err){
        res.status(404).send(err);
    }
})
//get all
router.get('/',async(req,res) => {
    try{
        const data = await securityModel.find();
        res.status(200).send(data);
    }catch(err){
        res.status(404).send(err);
    }
})
//get by id
router.get('/:id',async(req,res) => {
    try{
        const data = await securityModel.findById(req.params.id);
        res.status(200).send(data);
    }catch(err){
        res.status(404).send(err);
    }
})

module.exports = router;