
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
        const data = new adminModel(requestData); 
        const savedData = await data.save();
        res.status(200).send(savedData);
    }catch(err){
        res.status(404).send(err);
    }
})

router.get('/login',async(req,res) => {
    try{

    }catch(err){

    }
})

module.exports = router;