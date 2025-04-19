const {DataTypes} = require('sequelize');
const sequelize = require('../Configer/DB');

const UserLessons = sequelize.define('userLessons', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    curse:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    status:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    }
},{});

module.exports = UserLessons;