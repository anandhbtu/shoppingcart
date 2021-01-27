const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    description: { type: Sequelize.TEXT, allowNull: false }
}


const ReturnPolicyModel = sequelize.define('return_policy', model, { freezeTableName: true, timestamps: false });
ReturnPolicyModel.sync({})

module.exports = ReturnPolicyModel;