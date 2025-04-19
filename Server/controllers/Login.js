const DB = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

module.exports = {
    async post(req, res) {
        try {
            const { logType, value, password, lat, lon } = req.body;
            let _isMatch = false;
            let user = {};
            switch (logType) {
                case 'name':
                    user = await DB.User.findOne({ where: { name: value } });
                    break;
                case 'email':
                    user = await DB.User.findOne({ where: { email: value } });
                    break;
                case 'phone':
                    user = await DB.User.findOne({ where: { phone: value } });
                    break;
            }
            if (!user) {
                return res.status(500).json({ message: 'Invalid user.', code: 404 });
            }
            bcrypt.compare(password, user.password, (err, isMatch) => {
                _isMatch = isMatch;
                if (err) {
                    return res.status(401).json({ message: 'Invalid password!', code: 401 });
                }
                if (isMatch) {
                    if (user.status === 'removed') {
                        return res.status(401).json({ message: 'User removed!', code: 401 });
                    } else if (user.status === 'inactive') {
                        return res.status(401).json({ message: 'User inactive!', code: 401 });
                    }
                    const token = jwt.sign({ id: user.id, name: user.name }, JWT_SECRET, { expiresIn: process.env.JWT_TIME || '2h' });
                    res.status(201).json({ message: 'Password matches!', code: 201, token: token });
                }
                else {
                    return res.status(401).json({ message: 'Password does not match!', code: 401 });
                }
            });
            if (_isMatch) {
                await DB.LoggedInLog.create({ userId: user.id, latitude: lat, logitude: lon, ipAddress: req.connection.remoteAddress });
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};
