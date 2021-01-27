const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    purchaseHistoryId: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    TransId: { type: Sequelize.INTEGER, allowNull: false },
    amount: { type: Sequelize.FLOAT, allowNull: true },
    discount: { type: Sequelize.INTEGER },
    tax: { type: Sequelize.INTEGER, allowNull: false },
    totalAmount: {type: Sequelize.FLOAT, allowNull:false},
    userId: { type: Sequelize.INTEGER, allowNull: false, unique: true },
    comyId: { type: Sequelize.INTEGER, allowNull: false, unique: true },
    deliveryId: {type: sequelize.INTEGER,allowNull: false,unique:true},
}


const PurchaseHistoryModel = sequelize.define('purchase_history', model, { freezeTableName: true, timestamps: false });
PurchaseHistoryModel.sync({})

module.exports = PurchaseHistoryModel;