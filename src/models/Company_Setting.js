const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    companyId: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    banner: { type: Sequelize.STRING, allowNull: false },
    logo: { type: Sequelize.STRING, allowNull: true },
    discount: { type: Sequelize.INTEGER },
    description: { type: Sequelize.STRING, allowNull: false },
    panId: { type: Sequelize.STRING, allowNull: false, unique: true },
    gstId: { type: Sequelize.STRING, allowNull: false, unique: true }
}


const CompanySettingModel = sequelize.define('company_setting', model, { freezeTableName: true, timestamps: false });
CompanySettingModel.sync({})

module.exports = CompanySettingModel;