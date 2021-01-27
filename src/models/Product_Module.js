const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    productId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    moduleId: { type: Sequelize.INTEGER, allowNull: false }
}


const ProductCategoryModel = sequelize.define('product_category', model, { freezeTableName: true, timestamps: false });
ProductCategoryModel.sync({})

module.exports = ProductCategoryModel