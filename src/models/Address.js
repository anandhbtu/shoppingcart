const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    houseNumber: { type: Sequelize.STRING, allowNull: false },
    street: { type: Sequelize.STRING, allowNull: false },
    landmark: { type: Sequelize.STRING, allowNull: false },
    city: { type: Sequelize.STRING, allowNull: false },
    state: { type: Sequelize.STRING, aloowNull: false },
    zipCode: { type: Sequelize.STRING(6), allowNull: false },
    userId: { type: Sequelize.INTEGER, allowNull: false },
}


const AddressModel = sequelize.define('address', model, { freezeTableName: true, timestamps: false });
AddressModel.sync({})

module.exports = AddressModel;