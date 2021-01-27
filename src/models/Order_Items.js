const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    qty: { type: Sequelize.INTEGER, allowNull: false },
    unitPrice: { type: Sequelize.FLOAT, allowNull: false },
    tax: { type: Sequelize.INTEGER, allowNull: false },
    totalPrice: { type: Sequelize.FLOAT, allowNull: false },
    transactionId: { type: Sequelize.INTEGER, allowNull: false }
}


const OrderItemsModel = sequelize.define('order_items', model, { freezeTableName: true, timestamps: false });
OrderItemsModel.sync({})

module.exports = OrderItemsModel;