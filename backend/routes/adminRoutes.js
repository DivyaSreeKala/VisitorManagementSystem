
const express = require("express");
const bcrypt = require("bcrypt");
const router = new express.Router();

const adminModel = require('../models/adminData');
const securityModel = require('../models/securityData')

router.use(express.json());
router.use(express.urlencoded({extended : true}));

const authenticateJWT = require('../auth/authMiddleware');
const roleMiddleware = require('../auth/roleMiddleware');

router.get('/:id',authenticateJWT,roleMiddleware('admin'),async(req,res) => {
    try{
        console.log(req.params.id)
        const data = await adminModel.findById(req.params.id);
        console.log("hiii")
        console.log(data);
        console.log(req.user)
        res.status(200).send(data);
    }catch(err){
        res.status(404).send(err);
        console.log(err);
    }
})

router.put('/edit/:id',authenticateJWT,roleMiddleware('admin'),async(req,res) => {
    try{
        const id = req.params.id;
        const data = await adminModel.findOneAndUpdate({ _id: id }, req.body);
        res.status(200).send('Update Succesfull');
    }catch(err){
        res.status(404).send(err);
    }
});

router.post('/add',authenticateJWT,roleMiddleware('admin'),async(req, res) => {
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


module.exports = router;