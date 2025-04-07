const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Sequelize connected successfully!');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Database synced!');
  })
  .catch((error) => {
    console.error('Sequelize connection error:', error.message);
  });

module.exports = sequelize;

