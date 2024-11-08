const express = require("express");
const cors = require("cors");
const path = require("path");

const app = new express();

require('dotenv').config();
require('./db/connection');

app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);

const securityRoutes = require('./routes/securityRoutes');
app.use('/security', securityRoutes);

const visitorRoutes = require('./routes/visitorRoutes');
app.use('/visitor',visitorRoutes);

const loginRoute = require('./routes/loginRoute');
app.use('/login',loginRoute);


const PORT = process.env.PORT;
app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`)
})