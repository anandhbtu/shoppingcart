const Sequelize = require('sequelize');
const {sequelize} = require('../config/dbConnection');

const model = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    access: { type: Sequelize.STRING},
}


const RoleModel = sequelize.define('role', model, { freezeTableName: true, timestamps: false });
RoleModel.sync({})

module.exports = RoleModel;