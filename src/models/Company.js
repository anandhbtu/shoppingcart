const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    city: { type: Sequelize.STRING, allowNull: false },
    state: { type: Sequelize.STRING, aloowNull: false },
    zipCode: { type: Sequelize.STRING, allowNull: false },
}


const CompanyModel = sequelize.define('company', model, { freezeTableName: true, timestamps: false });
CompanyModel.sync({})

module.exports = CompanyModel;