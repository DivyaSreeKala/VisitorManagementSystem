
const express = require("express");

const router = new express.Router();

const adminData = require('../models/adminData');

router.use(express.json());
router.use(express.urlencoded({extended : true}));


router.get('/',async(req,res) => {
    try{
    const data = await adminData.find();
    console.log(data);
    res.status(200).send(data);
    }catch(err){
        res.status(404).send(err);
        console.log(err);
    }

})

module.exports = router;