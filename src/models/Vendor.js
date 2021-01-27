const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    companyId: { type: Sequelize.INTEGER, allowNull: false }
}


const VendorModel = sequelize.define('vendor', model, { freezeTableName: true, timestamps: false });
VendorModel.sync({})

module.exports = VendorModel;