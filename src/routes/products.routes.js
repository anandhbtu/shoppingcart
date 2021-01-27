
const router = require('express').Router();
const _ = require('lodash');
const productsController = require('../controllers/products.controller');

router.post('/addProduct', productsController.createProduct);

router.get('/getProduct',productsController.getProduct);

router.get('/getProductImagesByProductId/:productId',productsController.getProductImagesByProductId);

router.get('/getProductDetailsById/:Id',productsController.getProductDetailsById);

router.get('/getProductDetailsByIdd/:Id',productsController.getProductDetailsByIdd);
//router.get('/getProductExtraDetailsById/:product_id',productsController.getProductExtraDetailsById);


module.exports = router;