const {DataTypes} = require('sequelize');
const sequelize = require('../Configer/DB');

const LessonEvaluation = sequelize.define('LessonEvaluation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lessonId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    evaluation: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    status:{
        type:DataTypes.ENUM('active', 'hiden','removed'),
        allowNull: false,
        defaultValue: 'active'
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
},{
    tableName: 'lessonEvaluation',
});

module.exports = LessonEvaluation;
