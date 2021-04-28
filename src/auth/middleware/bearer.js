'use strict';

const users = require('../models/users.js');

module.exports = async (req, res, next) => {
    if (!req.headers.authorization) return next('Invalid Login');

    try {
        const token = req.headers.authorization.split(' ').pop();
        const validUser = await users.authenticateWithToken(token);

        req.user = validUser;
        req.token = validUser.token;
        next();
        
    } catch (e) {
        res.status(403).send('Invalid Login');
    }
}