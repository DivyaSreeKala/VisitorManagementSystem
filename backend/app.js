const express = require("express");
const cors = require("cors");


const app = new express();

require('dotenv').config();
require('./db/connection');

const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);

const securityRoutes = require('./routes/securityRoutes');
app.use('/security', securityRoutes);

const visitorRoutes = require('./routes/visitorRoutes');
app.use('/visitor',visitorRoutes);




const PORT = process.env.PORT;
app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`)
})