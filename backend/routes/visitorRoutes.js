
const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");

const path = require("path");
const router = express.Router();

const visitorModel = require('../models/visitorData');

router.use(express.json());
router.use(express.urlencoded({extended:true}));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads'); // Specify folder
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()+path.extname(file.originalname)}${file.originalname}`);
    }
  });
  const upload = multer({ storage: storage });

//post

router.post('/register',upload.single('idProof'),async(req,res) => {
    try{
         // Construct the URL for the uploaded file
        const url = req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename;
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
            res.status(200).send(data);
        }catch(err){
            res.status(404).send(err);
        }
    })
        //update

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: "smtp.gmail.com",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    router.put('/edit/:id',async(req,res) => {
        try{
            const timestamp = Date.now().toString(36);
            const randomPart = Math.random().toString(36).substring(2,8);
            const generatedUniqueCode = `${timestamp}-${randomPart}`
            const id = req.params.id;
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

            if(req.body.status == "approved"){
                const mailOptions = {
                    from: 'dsk.dev77@gmail.com',
                    to: 'divyasreekala99@gmail.com',
                    subject: 'Hello',
                    text: 'Hello World!',
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.error('Error sending email:', error);
                    } else {
                        console.log('Email sent:', info.response);
                    }
                });
            }
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