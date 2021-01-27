const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    imageId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: false },
    productImage: { type: Sequelize.BLOB, autoIncrement: true },
    productId: { type: Sequelize.INTEGER, allowNull: false }
 
}

const ProductImageModel = sequelize.define('Product_Image', model, { freezeTableName: true, timestamps: false });
ProductImageModel.sync({})

module.exports = ProductImageModel;



