const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token);
    if(!token){
        res.sendStatus(403);
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        console.log(req.user);
        next();
    })
};

module.exports = authenticateJWT;