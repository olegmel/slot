var slotAlgo = require("../run.js");
var AlgoCtrl = require("../controllers/algo.js");
var gcController = require("../controllers/gamecodes");

module.exports.getHandler = function(req, res, next) {
    slotAlgo(function(err, result) {
        if(err) {
            throw err;
        }

        var response = new AlgoCtrl(result).prepareResponse();
        console.log(response);

        res.status(200).end(response);
    });
};

module.exports.postHandler = function(req, res, next) {
    var gamecode = new gcController(req.session.gamecode.login);

    console.log(req.body);

    gamecode.updateObject(req.body);
    res.status(200).end();
};


