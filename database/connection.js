const { Sequelize } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: process.env.DB_DIALECT,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
      acquire: 20000
    },
    define: {
      timestamps: false,
      freezeTableName: true,
      // underscored:true
    }
  })

module.exports = sequelize;