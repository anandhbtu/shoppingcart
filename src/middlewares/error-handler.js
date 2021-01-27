module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({ message: 'Invalid Token' });
    }

    // default to 500 server error
    return res.status(500).json({ message: err.message });
}


exports.sendError = (error, res) => {
    let response = {
        "success": false,
        "errorCode": error.errorCode,
        "message": responseMessages(error.errorCode),
        "result": {
            errorCode: error.errorCode,
            message: responseMessages(error.errorCode),
            error: error.error
        },
        "responseCode": 400,
        "time": Date.now()
    }
    res.status(200).json(response);
};

exports.sendCustomError = (error, res) => {
    console.log(error);
    let response = {
        "success": false,
        "errorCode": error.errorCode,
        "message": responseMessages(error.errorCode),
        "result": {
            errorCode: error.errorCode,
            message: responseMessages(error.errorCode),
        },
        "responseCode": 400,
        "time": Date.now()
    }
    res.status(200).json(response);
}

exports.sendSuccess = (result, res) => {
    let response = {
        "success": true,
        "message": "success",
        "result": result,
        "responseCode": 200,
        "time": Date.now()
    }
    res.status(200).json(response);
};

function responseMessages(code) {
    if (code == 0)
        return "Authentication failed"
    else if (code == 1)
        return "Invalid Credentials";
    else if (code == 2)
        return "Internal server error,Please try after sometime.";
    else if (code == 3)
        return "Validation Error"
    else if (code == 4)
        return "An account already exists with that email. Select a different email."
    else if (code == 5)
        return "Please login first"
    else if (code == 6)
        return "Unauthorized Access"
    else if (code == 7)
        return "Invalid current Password"
    else if (code == 8)
        return "Invalid Passcode"
    else if (code == 9)
        return "Email not found"
    else if (code == 10)
        return "Please verify your account first"
    else if (code == 11)
        return "Mobile number not found."
    else if (code == 12)
        return "Invalid OTP"
    else if (code == 13)
        return "An account already exists with that mobile number. Select a different mobile number."
    else if (code == 14)
        return "This Link has been expired , please request for a new link."
    else if (code == 15)
        return "There was an error in sending the OTP to this Mobile Number."
    else if (code == 16)
        return "You can't make more than 3 three schools sponsored."
    else if (code == 17)
        return "Item not available."
    else if (code == 18)
        return "You can add product from one school , Do you want to continue ?."

};
