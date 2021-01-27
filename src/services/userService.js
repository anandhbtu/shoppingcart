const env = require('../config/env');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../models/User');
var validator = require("email-validator");
const _ =require('lodash');


module.exports = {
    signUp,
    signIn,
};



async function signUp(userParam) {

    let emailValidate = validator.validate(String(userParam.email).toLowerCase());
    let passValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (! emailValidate) {
        throw 'Plz Enter a valid email';
    } else if (! userParam.password.match(passValidate)) {
        throw "Password should be combination of at least one uppercase & atleast one lower case, one special char, one digit and min 8 , max 15s char long";

    }
    console.log(userParam);
    // validate

    const data = await UserModel.findAll({ where: { email: userParam.email } });
    console.log('Data--' + JSON.stringify(data));
    if (! _.isEmpty(data)) {
        throw 'Email "' + userParam.email + '" is already taken';
    }
    const user = new UserModel(userParam);

    // hash password
    if (userParam.password) {
        user.password = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
    return user;
}

async function signIn(userParam) {

    const user = await UserModel.findAll({ where: { email: userParam.email } });
    if (!user) {
        return null;
    } else {
        if (bcrypt.compareSync(userParam.password, user[0].password)) {
            const token = jwt.sign({ sub: user.id }, env.secret);
            console.log(token);
            return token;
        }
    }
}


