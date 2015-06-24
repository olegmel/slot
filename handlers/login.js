var gc = require("../models/gamecodes");
var gcController = require("../controllers/gamecodes");

module.exports.getHandler = function(req, res, next) {
    res.render('login');
};

module.exports.postHandler = function(req, res, next) {
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
};