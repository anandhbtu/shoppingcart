const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    vendorId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    productId: { type: Sequelize.INTEGER, allowNull: false },
    companyId: { type:Sequelize.INTEGER, allowNull: false}
}


const VendorProductModel = sequelize.define('vendor_product', model, { freezeTableName: true, timestamps: false });
VendorProductModel.sync({})

module.exports = VendorProductModel;