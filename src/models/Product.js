const Sequelize = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const model = {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    cost_price: { type: Sequelize.INTEGER, allowNull: false },
    discount: { type: Sequelize.INTEGER },
    description: { type: Sequelize.STRING, allowNull: false },
    qty: { type: Sequelize.INTEGER, allowNull: false },
    unitId: { type: Sequelize.INTEGER, allowNull: false },
    parentId: { type: Sequelize.INTEGER, allowNull: false },
    offer:{ type: Sequelize.BOOLEAN, allowNull: false},
    currency:{ type: Sequelize.INTEGER, allowNull: false },
    bought : { type: Sequelize.STRING, allowNull: false },
    image:{ type: Sequelize.JSON(Sequelize.STRING),alowNull:true},
    extraDetail:{type: Sequelize.JSON(),allowNull: false },
    //icon: { type: Sequelize.STRING, allowNull: false }
    //  specification: { type: Sequelize.TEXT, allowNull: false },
    //  refundId: { type: Sequelize.INTEGER, allowNull: false },
}

const ProductModel = sequelize.define('product', model, { freezeTableName: true, timestamps: false });
ProductModel.sync({})

module.exports = ProductModel;