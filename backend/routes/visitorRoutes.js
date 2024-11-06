
const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const visitorModel = require('../models/visitorData');

router.use(express.json());
router.use(express.urlencoded({extended:true}));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images'); // Specify folder
    },
    filename: function (req, file, cb) {
      cb(null, `${file.originalname}_${Date.now()+path.extname(file.originalname)}`); // Keep original name with timestamp
    }
  });
  const upload = multer({ storage: storage });

//post

router.post('/register',upload.single('idProof'),async(req,res) => {
    try{
         // Construct the URL for the uploaded file
        const url = req.protocol + '://' + req.get('host') + '/public/images/' + req.file.filename;
        console.log(req.file)
        const requestData = {
            fullName:req.body.fullName,
            email:req.body.email,
            phoneNo:req.body.phoneNo,
            address:req.body.address,
            department:req.body.department,
            purposeOfVisit:req.body.purposeOfVisit,
            idType:req.body.idType,
            idProof:url
        };
        console.log(requestData);
        const data = new visitorModel(requestData);
        const savedData = await data.save();
        res.status(200).send(savedData);
        //////add file using multer
    }catch(err){
        res.status(404).send(err);
    }
})

    //by admin
        //get all
    router.get('/',async(req,res) => {
        try{
            const data = await visitorModel.find();
            res.status(200).send(data);
        }catch(err){
            res.status(404).send(err);
        }
    })

        //get by id
    router.get('/:id',async(req,res) => {
        try{
            const data = await visitorModel.findById(req.params.id);
            console.log(data);
            res.status(200).send(data);
        }catch(err){
            res.status(404).send(err);
            console.log(err);
        }
    })
        //update
    router.put('/edit/:id',async(req,res) => {
        try{
            const timestamp = Date.now().toString(36);
            const randomPart = Math.random().toString(36).substring(2,8);
            const generatedUniqueCode = `${timestamp}-${randomPart}`
            const id = req.params.id;
            console.log(req.body);
            const data = await visitorModel.findOneAndUpdate({ _id: id }, 
                {
                    status: req.body.status,          // Update status
                    // dateAllotted: req.body.dateAllotted, // Update dateAllotted
                    timeIn: req.body.timeIn,          // Update timeIn
                    timeOut: req.body.timeOut,        // Update timeOut
                    uniqueCode: generatedUniqueCode ,  // Update uniqueCode
                    // securityId: req.body.securityId   // Update securityId
                },
            );
            console.log(data);
            res.status(200).send("Update Successfull");
        }catch(err){
            res.status(404).send(err);
        }
    });


        //delete
router.delete('/delete/:id',async(req,res) => {
    try{
        const id = req.params.id;
        const data = await visitorModel.findByIdAndDelete(id);
        res.status(200).send("deleted successfuly");
    }catch(err){
        res.status(404).send(err);
    }
})
module.exports = router;