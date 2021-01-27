const jwt = require('express-jwt');
const { secret } = require('../config/env');
const UserModel = require('../models/User')
const bcrypt = require('bcrypt');
const _ = require('lodash');
const errHandler = require('./error-handler')

module.exports = authorize;

function authorize() {

  return async (req, res, next) => {
    console.log(req.body);
    //const error=[];
    const user = await UserModel.findAll({ where: { email: req.body.email } });
    if (_.isEmpty(user)) {
      //error.push(errorCode=9);
      return res.status(401).json({Result:"Failure",Code:1, Message: 'Unauthorized' });
    } else if (!bcrypt.compareSync(req.body.password, user[0].password)) {
      return res.status(401).json({Result:"Failure",Code:1 ,Message: 'Unauthorized' });
    }
    // console.log(error.length);
    // if(errorCode !== null){
    //   console.log(errorCode);
    //   await errHandler.sendCustomError(error,res);
    // }
    next();
  }
}
