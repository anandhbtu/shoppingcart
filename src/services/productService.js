
const ProductModel = require('../models/Product')
const ModuleModel = require('../models/Module')
const ProductImageModel = require('../models/Product_Image')
const ProductExtraDetailsModel = require('../models/Product_Extra_Details')
const ProductSizingModel = require('../models/Product_Sizing')
const ProductReviewsModel = require('../models/Product_Reviews')
const ProductStoreReviewsModel = require('../models/Product_Store_Reviews')
const ProductSponsoredModel = require('../models/Product_Sponsored')
const _ = require('lodash');

exports.insertProduct = async (req) => {
  console.log(req);
  const data = await ProductModel.findOne({ where: { name: req.name } });
  console.log('Data--' + JSON.stringify(data));
  if (!_.isEmpty(data)) {
    throw 'Product "' + req.name + '" is already exits';
  }
  const product = new ProductModel(req);
  console.log("Product-->" + product);
  await product.save();
  return product;
}

exports.getProduct = async (req) => {
  let page = parseInt(req.query.page);
  let limit = parseInt(req.query.limit);
  let id = parseInt(req.query.id);
  const data = await ProductModel.findAll({
    attributes: ['id', 'name', 'cost_price', 'discount', 'description', 'qty', 'unitId', 'parentId', 'offer', 'currency', 'bought', 'image'],
    limit: limit, offset: limit * page,
    where: {
      parentId: id
    }
  })
  return data;
}

exports.getProductDetailsById = async (req) => {
  let id = parseInt(req.params.Id)
  const data = await ProductModel.findAll({
    attributes: ['id', 'name', 'cost_price', 'discount', 'description', 'qty', 'unitId', 'parentId', 'offer', 'currency', 'bought', 'image'],
    where: {
      id: id
    }
  })
  return data;
}

exports.getProductDetailsByIdd = async (req) => {
  let id = parseInt(req.params.Id)
  const data = await ProductModel.findAll({
    where: {
      id: id
    }
  })
  console.log('data :>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', data)
  return data;
}

exports.getProductImagesByProductId = async (req) => {
  const data = await ProductImageModel.findAll({
    where: {
      productId: req.params.Id
    }
  })
  var arr = [];
 // var count = 0;
  data.forEach(element => {
  //  count++;
    arr.push(element.productImage)
  })
 // arr.push({ 'length': count })
  return arr;
}

exports.getProductExtraDetailsByProductId = async (req) => {
  const data = await ProductExtraDetailsModel.findAll({
    attributes: ['size', 'color', 'stock', 'shipping', 'rating', 'rating_count', 'store_rate', 'store_rating', 'store_rating_count', 'sold_by', 'specs', 'buyer_guarantee', 'currency'],
    where: {
      product_id: req.params.Id
    }
  })
  return data;
}

exports.getSizingByProductId = async (req) => {
  const data = await ProductSizingModel.findAll({
    attributes: ['small', 'okay', 'large'],
    where: {
      productId: req.params.Id
    }
  })
  return data;
}

exports.getReviewsByProductId = async (req) => {
  const data = await ProductReviewsModel.findAll({
    where: {
      productId: req.params.Id
    }
  })
  var arr = [];
  data.forEach(element => {
    arr.push(element.review1, element.review2, element.review3, element.review4, element.review5, element.review6, element.review7, element.review8, element.review9, element.review10)
  })
  return arr;
}

exports.getStoreReviewsByProductId = async (req) => {
  const data = await ProductStoreReviewsModel.findAll({
    where: {
      productId: req.params.Id
    }
  })
  var arr = [];
  data.forEach(element => {
    arr.push(element.store_reviews1, element.store_reviews2, element.store_reviews3, element.store_reviews4, element.store_reviews5, element.store_reviews6, element.store_reviews7, element.store_reviews8, element.store_reviews9, element.store_reviews10)
  })
  return arr;
}

exports.getSponsoredByProductId = async (req) => {
 const data = await ProductSponsoredModel.findAll({
    where: {
      productId: req.params.Id
    }
  })
  var arr = [];
  data.forEach(element => {
    arr.push(element.sponsored1, element.sponsored2, element.sponsored3, element.sponsored4, element.sponsored5, element.sponsored6, element.sponsored7, element.sponsored8, element.sponsored9, element.sponsored10)
  })
  return arr;
}

