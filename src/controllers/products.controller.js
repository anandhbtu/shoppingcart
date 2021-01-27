const productService = require('../services/productService');



exports.createProduct = (req, res, next) => {
    productService.insertProduct(req.body)
        .then(product => res.status(200).json({ Result: "Success", Code: 0, message: "Product Inserted Succesfully", Data: { Item: product } }))
        .catch(err => next(err));
}
exports.getProduct = (req, res, next) => {
    productService.getProduct(req)
        .then(product => res.status(200).json({ result: "Success", message: "Fetched products Succesfully", data: { item: product } }))
        .catch(err => next(err));   
}

exports.getProductImagesByProductId = (req, res, next) => {
    productService.getProductImagesByProductId(req)
        .then(getProductImagesByProductId => res.status(200).json(  getProductImagesByProductId))
        .catch(err => next(err));   
}

exports.getProductDetailsById =async (req, res, next) => {
    let sponsored=  await productService.getSponsoredByProductId(req) 
    let store_reviews=  await productService.getStoreReviewsByProductId(req) 
    let reviews=  await productService.getReviewsByProductId(req) 
    let sizing=  await productService.getSizingByProductId(req) 
    let extraDetails=  await productService.getProductExtraDetailsByProductId(req) 
  let Images=  await productService.getProductImagesByProductId(req)  
    productService.getProductDetailsById(req)
    .then(getProductDetailsByProductId => res.status(200).json({ result: "Success", message: "Fetched Product Details Succesfully", data: { item: getProductDetailsByProductId,extraDetails:extraDetails,images: Images,reviews:reviews,store_reviews:store_reviews,sizing:sizing,sponsored:sponsored}}))
    .catch(err => next(err));
}  

exports.getProductDetailsByIdd =async (req, res, next) => {
  let Images=  await productService.getProductImagesByProductId(req)  
    productService.getProductDetailsByIdd(req)
    .then(getProductDetailsByProductId => res.status(200).json({ result: "Success", message: "Fetched Product Details Succesfully", data: { item: getProductDetailsByProductId,images: Images}}))
    .catch(err => next(err));
}  