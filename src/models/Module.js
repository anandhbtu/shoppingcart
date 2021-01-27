const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    companyId: { type: Sequelize.INTEGER, allowNull: false },
    parentId: { type: Sequelize.INTEGER, allowNull: false },
    icon: { type: Sequelize.STRING, allowNull: false }
}


const ModuleModel = sequelize.define('module', model, { freezeTableName: true, timestamps: false });
ModuleModel.sync({alter:true})

module.exports = ModuleModel;