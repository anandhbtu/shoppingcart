const express = require("express");
const router = require('express').Router();
const bodyParser = require("body-parser");
const UserModel = require('../models/Module');
const _ = require('lodash');
const modulesController = require('../controllers/modules.controller');

const app = express();
const morgan = require("morgan");
const { col } = require("sequelize");

app.use(bodyParser.json()).use(morgan());
app.use(bodyParser.urlencoded({ extended: true }));

router.get("/moduless", modulesController.getAllModules);
module.exports = router;
