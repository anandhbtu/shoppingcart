const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    roleId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    moduleName: { type: Sequelize.STRING, allowNull: false }
}


const RoleModuleModel = sequelize.define('role_module', model, { freezeTableName: true, timestamps: false });
RoleModuleModel.sync({})

module.exports = RoleModuleModel;