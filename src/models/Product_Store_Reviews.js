const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    productId:  { type: Sequelize.INTEGER, allowNull: false },
    store_reviews1:  { type: Sequelize.STRING, allowNull: false },
    store_reviews2:  { type: Sequelize.STRING, allowNull: false },
    store_reviews3:  { type: Sequelize.STRING, allowNull: false },
    store_reviews4:  { type: Sequelize.STRING, allowNull: false },
    store_reviews5:  { type: Sequelize.STRING, allowNull: false },
    store_reviews6:  { type: Sequelize.STRING, allowNull: false },
    store_reviews7:  { type: Sequelize.STRING, allowNull: false },
    store_reviews8:  { type: Sequelize.STRING, allowNull: false },
    store_reviews9:  { type: Sequelize.STRING, allowNull: false },
    store_reviews10:  { type: Sequelize.STRING, allowNull: false },
}


const StoreReviewsModel = sequelize.define('store_reviews', model, { freezeTableName: true, timestamps: false });
StoreReviewsModel.sync({})

module.exports = StoreReviewsModel;