// const { DataTypes } = require('sequelize');
// const sequelize = require('../Configer/DB');

// const LessonPoint = sequelize.define('LessonPoint', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     lessonID:{
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     point: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     description: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     is_active: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: true
//     },
//     created_at: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: DataTypes.NOW
//     }
// }, {
//     tableName: 'lessonPoint',
//     timestamps: false,
//     underscored: true,
//     freezeTableName: true
// });

// module.exports = LessonPoint;
