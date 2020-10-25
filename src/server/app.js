var express = require('express');
var path = require('path');
var config = require('../../config');



var app = express();
app.use(express.json());
var port = config.port;
app.use(express.static(path.join(__dirname, '../public')));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})    
