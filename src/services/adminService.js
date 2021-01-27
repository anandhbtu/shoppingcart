const _ = require('lodash');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const env = require('../config/env');
const UserModel = require('../models/User')
const RoleModel = require('../models/Role');
const ModuleModel = require('../models/Module');


exports.fetchRole = async (params) => {
    const arr = [];
    const token = jwt.sign({ sub: params.id }, env.secret);
    const RoleId = await UserModel.findOne({ where: { email: params.email }, attributes: ['roleId'] });
    const RoleName = await RoleModel.findOne({ where: { id: RoleId.roleId }, attributes: ['name'] });
    if (RoleName.name === "super admin") {
        const ModuleName = await ModuleModel.findAll({ where: { parentId: 0 }, attributes: ['id', 'name','icon'] });
        console.log('ModuleName :>> ' + JSON.stringify(ModuleName));
        console.log("RoleName" + JSON.stringify(RoleName.name));
        arr.push({ token: token }, { Role: RoleName.name }, { Module: ModuleName });
    }
    return arr;
}

// CREATE PRODUCT
exports.addProduct = (req, res) => {
    // Check if this is admin
    console.log(req.body);
    if (!req.user || req.user.is_admin === false) {
        return res.status(403).send({ error: 'Not authorized.' });
    }

    const name = req.body.name ? req.body.name.trim() : '';
    const description = req.body.description ? req.body.description.trim() : '';
    const price = parseFloat((Math.round(req.body.price * 100) / 100).toFixed(2));

    // Check all inputs
    if (!name || !description || typeof price !== 'number') {
        return res
            .status(400)
            .send({ error: 'All inputs are required.' });
    }

    const productObject = {
        name,
        price,
        description,
    };

    // Check if the product is already in database (same name)
    Product
        .findAll({ where: { name } })
        .then((products) => {
            if (products.length > 0) {
                return res.status(400).send({ error: 'Product already exists.' });
            }
            // Create a product
            Product.create(productObject)
                .then(data => res.json(data))
                .catch((err) => {
                    console.error('Error on post: ', err);
                    return res.status(400).send({ error: err.message });
                });
        })
        .catch((error) => {
            return res.status(400).send({ error: error.message });
        });
};

// DELETE PRODUCT
exports.deleteProduct = (req, res) => {
    // Check if this is admin
    if (!req.user || req.user.is_admin === false) {
        return res.status(403).send({error: 'Not authorized.'});
    }

    Product.findById(req.params.productId)
        .then((product) => {
            product.destroy()
                .then(data => res.json(data))
                .catch((error) => {
                    console.error('Error on delete: ', error);
                    return res.status(400).send({error: err.message});
                });
        })
        .catch((err) => {
            console.error('Error on finding a product: ', err);
            return res.status(400).send({error: err.message});
        });
};

// UPDATE PRODUCT
exports.updateProduct = (req, res) => {
    // Check if this is admin
    if (!req.user || req.user.is_admin === false) {
        return res.status(403).send({error: 'Not authorized.'});
    }

    const price = parseFloat((Math.round(req.body.price * 100) / 100).toFixed(2));

    if (typeof price !== 'number') {
        return res
            .status(400)
            .send({error: 'price must be number.'});
    }

    Product.findById(req.params.productId)
        .then((product) => {
            const projectData = {
                name: req.body.name || product.name,
                price: price < 0 ? product.price : price,
                description: req.body.description || product.description,
            };

            product.update(projectData)
                .then(data => res.json(data))
                .catch((error) => {
                    console.error('Error on update: ', error);
                    return res.status(400).send({error: err.message});
                });
        })
        .catch((err) => {
            console.error('Error on finding a product: ', err);
            return res.status(400).send({error: err.message});
        });
};
