var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('Hello world');
  //res.render('index', { title: 'Home' });
});

module.exports = router;