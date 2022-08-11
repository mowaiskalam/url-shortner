const Sequelize = require('sequelize');
const config = require('./env');

// Set up the config
const sequelize = new Sequelize(config);

sequelize.authenticate();

module.exports = { sequelize, Sequelize };
