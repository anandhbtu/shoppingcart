const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false, validate: { isEmail: true }, unique: true },
    password: {
        type: Sequelize.STRING, allowNull: false,
    },
    roleId: { type: Sequelize.INTEGER, allowNull: false },
    companyId: { type: Sequelize.INTEGER, allowNull: false }
}
const UserModel = sequelize.define('user', model, { freezeTableName: true, timestamps: false });
UserModel.sync({alter:true})

module.exports = UserModel;