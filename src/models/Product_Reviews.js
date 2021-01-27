const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    productId:  { type: Sequelize.INTEGER, allowNull: false },
    review1:  { type: Sequelize.STRING, allowNull: false },
    review2:  { type: Sequelize.STRING, allowNull: false },
    review3:  { type: Sequelize.STRING, allowNull: false },
    review4:  { type: Sequelize.STRING, allowNull: false },
    review5:  { type: Sequelize.STRING, allowNull: false },
    review6:  { type: Sequelize.STRING, allowNull: false },
    review7:  { type: Sequelize.STRING, allowNull: false },
    review8:  { type: Sequelize.STRING, allowNull: false },
    review9:  { type: Sequelize.STRING, allowNull: false },
    review10:  { type: Sequelize.STRING, allowNull: false },
}


const ReviewsModel = sequelize.define('reviews', model, { freezeTableName: true, timestamps: false });
ReviewsModel.sync({})

module.exports = ReviewsModel;