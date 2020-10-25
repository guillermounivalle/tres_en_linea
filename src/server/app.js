const express = require('express');
const path = require('path');
const config = require('../../config');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const morgan = require('morgan');
const mongoose = require('mongoose');


const port = config.port;
const app = express();
app.use(express.json());

//Settings
app.set('port', process.env.PORT || port);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
app.use('/', indexRouter)
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
    next(createError(404));
});


//Message info server is running ok
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})    

//connection Mongodb
const url = config.mongoUrl;
const connect = mongoose.connect(url, {useFindAndModify: false, useUnifiedTopology: true,  useNewUrlParser: true});
connect.then((db) => {
    console.log('Connected Correctly to server');
}, (err) => {
    console.log(err);
})


module.exports = app;