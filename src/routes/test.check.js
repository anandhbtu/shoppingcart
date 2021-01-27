const express = require("express");
const router = require('express').Router();
const bodyParser = require("body-parser");
const UserModel = require('../models/Module');
const _ = require('lodash');
var fs = require('fs');
const app = express();
const morgan = require("morgan");
const { col } = require("sequelize");

app.use(bodyParser.json()).use(morgan());
app.use(bodyParser.urlencoded({ extended: true }));

//console.log(__dirname);

var filepath = 'media/shipgig/ea00d876-fb89-43b6-bd2c-785b91adbec4/Anand/shopping_cart/src/icon/Audio.png'

router.get(`/path/${filepath}`, function (req, res) {
    res.send(filepath);
})

router.get("/modules", async (req, res) => {
    const data = await UserModel.findAll();
    console.log('data---------- :>>', data)
    res.send(data);

});
module.exports = router;
