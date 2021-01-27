const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    productId:  { type: Sequelize.INTEGER, allowNull: false },
    sponsored1:  { type: Sequelize.STRING, allowNull: false },
    sponsored2:  { type: Sequelize.STRING, allowNull: false },
    sponsored3:  { type: Sequelize.STRING, allowNull: false },
    sponsored4:  { type: Sequelize.STRING, allowNull: false },
    sponsored5:  { type: Sequelize.STRING, allowNull: false },
    sponsored6:  { type: Sequelize.STRING, allowNull: false },
    sponsored7:  { type: Sequelize.STRING, allowNull: false },
    sponsored8:  { type: Sequelize.STRING, allowNull: false },
    sponsored9:  { type: Sequelize.STRING, allowNull: false },
    sponsored10:  { type: Sequelize.STRING, allowNull: false },
}


const SponsoredModel = sequelize.define('sponsored', model, { freezeTableName: true, timestamps: false });
SponsoredModel.sync({})

module.exports = SponsoredModel;