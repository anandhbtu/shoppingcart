const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');
const model = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    size: { type: Sequelize.STRING, allowNull: false },
    color: { type: Sequelize.STRING, allowNull: false },
    stock: { type: Sequelize.INTEGER, allowNull: false },
    shipping: { type: Sequelize.INTEGER, allowNull: false },
    rating: { type: Sequelize.INTEGER, allowNull: false },
    rating_count: { type: Sequelize.INTEGER, allowNull: false },
    store_rate: { type: Sequelize.INTEGER, allowNull: false },
    store_rating: { type: Sequelize.INTEGER, allowNull: false },
    store_rating_count: { type: Sequelize.INTEGER, allowNull: false },
    sold_by: { type: Sequelize.STRING, allowNull: false },
    specs: { type: Sequelize.STRING, allowNull: false },
    buyer_guarantee: { type: Sequelize.STRING, allowNull: false },
    product_id: { type: Sequelize.INTEGER, allowNull: false },
    currency:{ type: Sequelize.STRING, allowNull: false },
}
const ProductExtraDetails = sequelize.define('product_extra_details', model, { freezeTableName: true, timestamps: false });
ProductExtraDetails.sync({})
module.exports = ProductExtraDetails;