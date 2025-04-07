

const { sequelize,User } = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret';

module.exports = {
    get: async function (req, res) {
        try {
            sequelize.sync();
            const users = await User.findAll();
            
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    post: async function (req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await User.findOne({ where: { email: email } });
            if (user) {
                return res.status(400).json({ message: 'Email already exists' });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ name, email, password: hashedPassword });
            const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: '1h' });
            res.status(201).json({ token });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    put: async function (req, res) { },
    delete: async function (req, res) { }
};