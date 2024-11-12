
const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");

const path = require("path");
const router = express.Router();

const visitorModel = require('../models/visitorData');
const authenticateJWT = require("../auth/authMiddleware");
const roleMiddleware = require("../auth/roleMiddleware");

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
        const email = req.body.email;
        const existingVisitor = await visitorModel.findOne({ email });
        console.log(existingVisitor)
        if (existingVisitor && existingVisitor.status !== 'approved' && existingVisitor.status !== 'checked-in') {
            return res.status(400).json({
                success: false,
                message: 'You can only submit a new request once your previous request is approved or you have checked in.'
            });
        }
         
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
        console.log(requestData)
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
    router.get('/',authenticateJWT,roleMiddleware('admin'),async(req,res) => {
        try{
            const data = await visitorModel.find();
            res.status(200).send(data);
        }catch(err){
            res.status(404).send(err);
        }
    })

        //get by id
    router.get('info/:id',authenticateJWT,roleMiddleware('admin'),async(req,res) => {
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

    router.put('/edit/:id',authenticateJWT,roleMiddleware('admin'),async(req,res) => {
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
                },{ new: true, runValidators: true }
            );

            if(req.body.status == "approved"){
                const mailOptions = {
                    from: 'dsk.dev77@gmail.com',
                    to: 'divyasreekala99@gmail.com',
                    subject: 'Hello',
                    html: `<div><h1>Hello World!</h1><a href="${req.protocol}://${req.hostname}:5173/details/${id}">Your Pass</a></div>`,
                };
                console.log(req)
                //needs to set activation time and expiration time 
                
                // console.log(`${req.protocol}://${req.hostname}:5173/details/${id}`)
                // transporter.sendMail(mailOptions, (error, info) => {
                //     if (error) {
                //         console.error('Error sending email:', error);
                //     } else {
                //         console.log('Email sent:', info.response);
                //     }
                // });
            }
            res.status(200).send("Update Successfull");
        }catch(err){
            res.status(404).send(err);
        }
    });


        //delete
router.delete('/delete/:id',authenticateJWT,roleMiddleware('admin'),async(req,res) => {
    try{
        const id = req.params.id;
        const data = await visitorModel.findByIdAndDelete(id);
        res.status(200).send("deleted successfuly");
    }catch(err){
        res.status(404).send(err);
    }
})

  //by security

        //verify token
    router.get('/verify-token/:token',async(req,res) => {
        try{
            const token = req.params.token;
            console.log(token)
            const data = await visitorModel.find({uniqueCode:token});
            console.log(data);
            res.status(200).send(data);
        }catch(err){
            res.status(404).send(err);
            // console.log(err)
        }
    })

    //visitor info in a link
    router.get('/details/:id',async(req,res) => {
        try{
            const data = await visitorModel.findById(req.params.id);
            const sendingData = { 
                name:data.fullName,
                department:data.department,
                purposeOfVisit:data.purposeOfVisit,
                status:data.status,
                uniqueCode:data.uniqueCode
            }
            res.status(200).send(sendingData);
        }catch(err){
            res.status(404).send(err);
        }
    })

//all
    //daily visitor details
    router.get('/daily',async(req,res) => {
        try{
            const now = new Date();
            const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
            
            const data = await visitorModel.find({
                timeIn: { $gte:startOfDay },
                timeOut: { $gte:endOfDay }
            });

            //------currrent time in between the timeIn and timeOut------

            // const data = await visitorModel.find({
            //     timeIn: { $lte:now },
            //     timeOut: { $gte:now }
            // });
            console.log(data)
            res.status(200).send(data);
        }catch(err){
            res.status(404).send("error in fetching");
        }
    })

module.exports = router;