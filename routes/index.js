var express = require('express');
var router = express.Router();

//Route handlers:
var login = require("../handlers/login");
var algo = require("../handlers/algo");

var middlewares = require("../handlers/middlewares");

router.get('/', middlewares.isAuth, function(req, res, next) {
  res.render('slot');
});

router.route('/login')
    .get(login.getHandler)
    .post(login.postHandler);

router.get('/slot', middlewares.isAuth, function(req, res, next) {
  res.render('slot', req.session.gamecode);
});

router.route('/algo')
    .get(middlewares.isAuth, algo.getHandler);

module.exports = router;
