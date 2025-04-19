const { DataTypes } = require('sequelize');
const sequelize = require('../Configer/DB');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'teacher', 'student'),
        allowNull: false,
        defaultValue: 'student'
    },
    status: {
        type: DataTypes.ENUM('active','inactive','removed'),
        allowNull: false,
        defaultValue:'active'
    },
    loggedCount:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
},{
    tableName: 'users'
});

module.exports = User;
