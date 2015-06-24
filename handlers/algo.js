var slotAlgo = require("../run.js");
var AlgoCtrl = require("../controllers/algo.js");

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