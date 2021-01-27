
const moduleService = require('../services/moduleService');


module.exports = {
    getAllModules
};

function getAllModules(req, res, next) {
    //console.log("__dir-------------------" + __dirname);
    moduleService.getModules()
        .then(modules => res.status(200).json({ result: "Success", message: "Fetched Modules Succesfully", data: { item: modules } }))
        .catch(err => next(err));


}



