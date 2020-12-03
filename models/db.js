const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db.config');

// Create a DB connection object to be used throughout the application.
const db = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  dialect: dbConfig.dialect,
  host: dbConfig.host,
  port: dbConfig.port,
  pool: dbConfig.pool,
  logging: false,
  define: {
    timestamps: false
  }
});

module.exports = db;