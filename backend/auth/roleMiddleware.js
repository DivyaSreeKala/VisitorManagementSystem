const express = require("express")

const roleMiddleware = (role) => {
    return (req, res, next) => {
    const userRole  = req.user.user.role;
    if(userRole !== role) return res.sendStatus(403);

    next();
    }
}

module.exports = roleMiddleware;