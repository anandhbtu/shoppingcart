const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    productId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    rating1: { type: Sequelize.INTEGER },
    rating2: { type: Sequelize.INTEGER },
    rating3: { type: Sequelize.INTEGER },
    rating4: { type: Sequelize.INTEGER },
    rating5: { type: Sequelize.INTEGER },
}


const RatingModel = sequelize.define('rating', model, { freezeTableName: true, timestamps: false });
RatingModel.sync({})

module.exports = RatingModel;