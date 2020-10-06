const Sequelize = require('sequelize');

//importar variables
require('dotenv').config({ path: '.env'});

console.log("heroku_54c5bab1cdcf6d1", process.env.BD_USER, process.env.BD_PASS, process.env.BD_HOST,process.env.BD_PORT)

const db = new Sequelize("heroku_54c5bab1cdcf6d1", process.env.BD_USER, process.env.BD_PASS, {
  host: process.env.BD_HOST,
  dialect: 'mysql',
  port: process.env.BD_PORT,
  define: {
      timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = db;