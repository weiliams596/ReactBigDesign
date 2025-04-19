const DB = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

module.exports = {
    // async get(req, res) {
    //     res.status(200).json({ message: 'Welcome to Register' });
    // },
    async post(req, res) {
        try {
            const { name, email, phone, password, lat, lon } = req.body;
            const user = await DB.User.findOne({ where: { email: email } });
            if (user) {
                return res.status(400).json({ message: 'Email already exists', code: 400 });
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = await DB.User.create({ name: name, email: email, phone: phone, password: hashedPassword, loggedCount: 1 });
            const user_id = newUser.id;
            await DB.LoggedInLog.create({ userId: user_id, latitude: lat, longitude: lon, ipAddress: req.connection.remoteAddress });
            const token = jwt.sign({ id: newUser.id, name: name }, JWT_SECRET, { expiresIn: process.env.JWT_TIMER || '2h' });
            res.status(201).json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
