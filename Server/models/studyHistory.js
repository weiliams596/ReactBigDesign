const {DataTypes} = require('sequelize');
const sequelize = require('../Configer/DB');

const StudyHistory = sequelize.define('StudyHistory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    lessonId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    firstStudyTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    lastStudyTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    studyDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    studyStatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    tableName:'studyHistory',
});

module.exports = StudyHistory;