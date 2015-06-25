var express = require('express');
var router = express.Router();

//Route handlers:
var login = require("../handlers/login");
var logout = require("../handlers/logout");
var algo = require("../handlers/algo");
var current_user = require("../handlers/current_user");

var middlewares = require("../handlers/middlewares");

router.get('/', middlewares.isAuth, function(req, res, next) {
    res.redirect('/slot');
});

router.route('/logout')
    .get(logout.getHandler);

router.get('/slot', middlewares.isAuth, middlewares.updateSessionData, function(req, res, next) {
  res.render('slot', req.session);
});

router.route('/algo')
    .get(middlewares.isAuth, algo.getHandler);

router.route('/current_user')
    .get(middlewares.isAuth, current_user.getHandler);

router.route('/login')
    .get(login.getHandler)
    .post(login.postHandler);

module.exports = router;
