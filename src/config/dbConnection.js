const env = require('./env');
const Sequelize = require('sequelize');

var sequelize = new Sequelize(env.DB_DATABSE, env.DB_USERNAME, env.DB_PASSWORD, {
    host: env.DB_HOST,
    dialect: env.DB_DIALECT || 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = { sequelize};