var express = require('express');
var router = express.Router();
var gc = require("../models/gamecodes");
var async = require('async');
var crypto = require("../controllers/crypto");
var q = require("q");
var gcController = require("../controllers/gamecodes");
var middlewares = require("../middlewares");
//Route-handlers will be exported in single files. Everything that exists now is just for test and will be changed!

router.get('/', middlewares.isAuth, function(req, res, next) {
  arr = gc.getGamecodes();
  res.render('slot', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/code', function(req, res, next) {
  res.render('code');
});

router.get('/slot', function(req, res, next) {

    router.post('/login', function (req, res, next) {
        gc.getGamecodeByLogin(req.body.gamecode);

        if (gcController.comparePasswords(req.body.password, gc.gamecodeObject.password)) {
            res.send(gc);
            req.session.gamecode = gc.gamecodeObject;
            console.log(req.session);
        } else {
            res.send('Gamecode or password isn\'t correct');
        }

        res.status(200).end();


    });
});

router.get('/slot', middlewares.isAuth, function(req, res, next) {
  res.render('slot');
});

module.exports = router;