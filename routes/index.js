var express = require('express');
var router = express.Router();
var gc = require("./models/gamecodes");

/* GET home page. */
router.get('/', function(req, res, next) {
  arr = gc.getGamecodes();
  res.render('login', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/slot', function(req, res, next) {
  res.render('slot');
});

module.exports = router;
