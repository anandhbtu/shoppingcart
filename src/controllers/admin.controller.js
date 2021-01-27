const adminService = require('../services/adminService');

exports.getRole = (req, res, next) => {
    console.log("Data--->" + JSON.stringify(req.body))
    adminService.fetchRole(req.body)
        .then(arr => res.status(200).json({ Result: "Success", Code: 0, message: "Data Fetch", Data:  arr  }))
        .catch(err => next(err));
}


exports.createProduct = (req, res, next) => {
    console.log("Data--->" + JSON.stringify(req.body))
    adminService.addProduct(req,res)
        .then(arr => res.status(200).json({ Result: "Success", Code: 0, message: "Data Fetch", Data:  arr  }))
        .catch(err => next(err));
}

exports.deleteProduct = (req, res, next) => {
    console.log("Data--->" + JSON.stringify(req.body))
    adminService.addProduct(req,res)
        .then(arr => res.status(200).json({ Result: "Success", Code: 0, message: "Data Fetch", Data:  arr  }))
        .catch(err => next(err));
}

exports.updateProduct = (req, res, next) => {
    console.log("Data--->" + JSON.stringify(req.body))
    adminService.addProduct(req,res)
        .then(arr => res.status(200).json({ Result: "Success", Code: 0, message: "Data Fetch", Data:  arr  }))
        .catch(err => next(err));
}


