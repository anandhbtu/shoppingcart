const userService = require('../services/userService');

module.exports = {
    register,
    login
};


function register(req, res, next) {
    userService.signUp(req.body)
        .then(users => res.status(200).json({ Result: "Success", message: "User Register Succesfully", Data: users }))
        .catch(err => next(err));
}

function login(req, res, next) {
    userService.signIn(req.body)
        .then(users => users ? res.status(200).json({ Result: "Success", message: "Login Succesfully", token: users }) : res.status(400).json({ message: "Username or password is incorrect" }))
        .catch(err => res.status(400).json({ Result: "Failed", message: "User does not Exits" }));
}



