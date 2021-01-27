require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const env = require('./src/config/env')
const app = express();
var cors = require('cors')
const errorHandler = require('./src/middlewares/error-handler');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const usersRouter = require('./src/routes/users.routes');
const productsRouter = require('./src/routes/products.routes')
const adminRouter = require('./src/routes/admin.routes')
 const testRouter = require('./src/routes/test.check')
// const testRouter = require('./src/routes/test1.check')
const modulesRouter = require('./src/routes/modules.routes')
const iconsRouter = require('./src/routes/icon.routes')
app.use('/',testRouter);
app.use('/',usersRouter);
app.use('/', productsRouter);
app.use('/',adminRouter);
app.use('/',modulesRouter);
app.use('/',iconsRouter);
// global error handler
app.use(errorHandler);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(env.PORT, () => {
    console.log(`Server is Running On Port ${env.PORT}`);
});


module.exports = app