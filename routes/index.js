var express = require('express');
var router = express.Router();
var gc = require("../models/gamecodes");

var gcController = require("../controllers/gamecodes");
var slotAlgo = require("../run.js");

var middlewares = require("../middlewares");

router.get('/', middlewares.isAuth, function(req, res, next) {
  res.render('slot', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
    gc.getGamecodeByLogin(req.body.gamecode, function(err, data) {
        if(err) {
            throw err;
        }

        if(data !== null && gcController.comparePasswords(req.body.password, data.password)){
            req.session.gamecode = data;
            res.send(data);

            res.status(200).end();
        } else {
            res.status(404).end('Gamecode or password isn\'t correct');
        }
    });
});

router.get('/slot', middlewares.isAuth, function(req, res, next) {
  res.render('slot', req.session.gamecode);
});

router.get('/algo', middlewares.isAuth, function(req, res, next) {
    slotAlgo(function(err, result) {
        if(err) {
            throw err;
        }

        res.status(200).end(result);
    });
});

module.exports = router;
