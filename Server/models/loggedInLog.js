const { DataTypes } = require('sequelize');
const sequelize = require('../Configer/DB');

const LoggedInLog = sequelize.define('LoggedInLog', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    loginTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    logoutTime: {
        type: DataTypes.DATE,
        allowNull: true
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    ipAddress: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'loggedInLog'
});

module.exports = LoggedInLog;