const {DataTypes} = require('sequelize');
const sequelize = require('../Configer/DB');

const Lessons = sequelize.define('Lessons',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    teachers:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mainTeacher:{
        type:DataTypes.STRING,
        allowNull:false
    },
    submiter:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    mainTeacherID:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    belongToID:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    imageUrl:{
        type:DataTypes.STRING,
        allowNull:false
    },
    videoUrl:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.ENUM('active', 'inactive', 'closed' , 'removed'),
        allowNull:false,
        defaultValue:'inactive'
    },
    createdAt:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:DataTypes.NOW
    },
    updatedAt:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:DataTypes.NOW
    }
},{
    tableName:'lessons'
});

module.exports = Lessons;
