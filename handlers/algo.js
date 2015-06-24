var slotAlgo = require("../run.js");

module.exports.getHandler = function(req, res, next) {
    slotAlgo(function(err, result) {
        if(err) {
            throw err;
        }

        res.status(200).end(result);
    });
};