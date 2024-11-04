
const mongoose = require("mongoose");

mongoose.connect(process.env.MongoDB_URL)
        .then(() => {
            console.log("Connection Successfull");
        })
        .catch((err) => {
            console.log(err)
        })