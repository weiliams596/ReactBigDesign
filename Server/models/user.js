const {DataTypes} = require('sequelize');
const {sequelize} = require('../DB/configer');

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },        
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        role:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user'
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    });
    return User;
}