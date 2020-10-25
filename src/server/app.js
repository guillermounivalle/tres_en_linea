var express = require('express');
var path = require('path');
var config = require('../../config');
var createError = require('http-errors');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var morgan = require('morgan');


var port = config.port;
var app = express();
app.use(express.json());

//Settings
app.set('port', process.env.PORT || port);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
app.use(indexRouter)
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
    next(createError(404));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})    

module.exports = app;