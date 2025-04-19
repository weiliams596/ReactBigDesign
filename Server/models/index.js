const fs = require('fs');
const path = require('path');
const sequelize = require('../Configer/DB');

const db = {};

fs.readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== 'index.js' && file.endsWith('.js'))
    .forEach(file => {
        const model = require(path.join(__dirname, file));
        db[`${model.name}`]= model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
module.exports = db;

