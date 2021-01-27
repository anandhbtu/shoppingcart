const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        productId: { type: Sequelize.INTEGER, allowNull: false },
        small:{ type: Sequelize.INTEGER, allowNull: false },
        okay:{ type: Sequelize.INTEGER, allowNull: false },
        large:{ type: Sequelize.INTEGER, allowNull: false }
}
const SizingModel = sequelize.define('sizing', model, { freezeTableName: true, timestamps: false });
SizingModel.sync({})

module.exports = SizingModel;