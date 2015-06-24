var gc = require("../models/gamecodes");
var gcController = require("../controllers/gamecodes");

module.exports.getHandler = function(req, res, next) {
    res.render('login');
};

module.exports.postHandler = function(req, res, next) {
    var gamecode = new gcController(req.body.gamecode, req.body.password);

    gamecode.getObject(function(err,  data) {
        if(err) {
            throw err;
        }

        if(data) {
            req.session.gamecode = data;

            res.send(data);
            res.status(200).end();
        } else {
            res.status(403).end('Gamecode or password isn\'t correct');
        }
    });
};