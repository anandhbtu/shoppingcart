const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    productId: { type: Sequelize.INTEGER, allowNull: false },
    categoryId: { type: Sequelize.INTEGER, allowNull: false }
}


const ProductCategoryModel = sequelize.define('product_category', model, { freezeTableName: true, timestamps: false });
ProductCategoryModel.sync({})

module.exports = ProductCategoryModel;