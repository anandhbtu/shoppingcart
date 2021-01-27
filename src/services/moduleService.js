const ModuleModel = require('../models/Module')
const _ = require('lodash');


exports.getModules = async (req, res) => {
    //console.log( req)
    const data = await ModuleModel.findAll();
   // console.log('data---------- :>>', data)
   return data;
}