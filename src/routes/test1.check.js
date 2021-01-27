const express = require("express");
const router = require('express').Router();
const bodyParser = require("body-parser");



const app = express();
const morgan = require("morgan");

const adminController = require('../controllers/admin.controller');

app.use(bodyParser.json()).use(morgan());

app.use(bodyParser.urlencoded({ extended: true }));

router.get("/test", (req, res) => {
  res.send("Hiii Mayank................................");
});
module.exports = router;
