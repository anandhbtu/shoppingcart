var express = require('express')
var app = express()
const _ = require('lodash');
const ProductImageModel = require('../models/Product_Image')
let option = {
};
app.use(express.static(__dirname + "/public", option));

app.get("/icons/:iconId", async (req, res) => {
  let img = `<img src=/img/${req.params.iconId}.png>`;
  res.setHeader('Content-Type', "text/html");
  res.send(img);
})
app.get("/images/:imageId", async (req, res) => {
  let img = `<img src=/poductImg/${req.params.imageId}.jpeg>`;
  res.setHeader('Content-Type', "text/html");
  res.send(img);
})

app.get("/getImagesByProductId/:productImage", async (req, res) => {
  let img = `<img src=/poductImg/${req.params.productImage}.jpeg>`;
  res.setHeader('Content-Type', "text/html");
  res.send(img);
})

app.get("/imagesss", async (req, res) => {
  let txt = `<div><h1>My First Heading</h1>

  <p>My first paragraph.</p><p txt=file.txt></p></div>`
  res.setHeader('Content-Type', "text/html");
  res.send(txt);
})

app.get("/getDetailsByProductId/:productId", async (req, res) => {
  const data = await ProductImageModel.findAll({
    where: {
      productId: req.params.productId
    }
  });
  var img = `<img src=/poductImg/${data[0].productImage}.jpeg>`;
  for (var i = 1; i < Object.keys(data).length; i++) {
    img = img + `<img src=/poductImg/${data[i].productImage}.jpeg>`;
    res.setHeader('Content-Type', "text/html");
    console.log('img :---------------->>', img)
  }
  res.send(img);
})

module.exports = app;







