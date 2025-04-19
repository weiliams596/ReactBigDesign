const jwt = require('jsonwebtoken');
require("dotenv").config();

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: 'Access denied. No token provided.',
            code: 401
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: 'Invalid token.',
                code: 401
            });
        }
        req.user = decoded;
        next();
    });
};

module.exports = verifyToken;