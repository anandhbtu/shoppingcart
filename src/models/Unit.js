const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    scale: { type: Sequelize.INTEGER, allowNull: false }
}


const UnitModel = sequelize.define('unit', model, { freezeTableName: true, timestamps: false });
UnitModel.sync({})

module.exports = UnitModel;