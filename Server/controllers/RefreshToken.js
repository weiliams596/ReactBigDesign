const jwt = require('jsonwebtoken');
require("dotenv").config();


module.exports = {
    async get(req, res) {
        try {
            const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

            if (!token) {
                return res.status(401).json({
                    message: 'Access denied. No token provided.',
                    code: 401
                });
            }

            jwt.verify(token, process.env.JWT_SECRET, { ignoreExpiration: true }, (error, decoded) => {
                if (error) {
                    return res.status(401).json({
                        message: 'Invalid token.',
                        code: 401
                    });
                }
                const now = Math.floor(Date.now() / 1000);
                const timeLeft = decoded.exp - now;

                if (timeLeft < 600) {
                    const newToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_TIMER || '2h' });
                    return res.status(200).json({
                        message: 'Token refreshed.',
                        code: 200,
                        token: newToken
                    });
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Internal Server Error',
                code: 500
            });
        }
    }
};

