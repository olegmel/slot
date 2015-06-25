var fs = require('fs');

module.exports.getHandler = function(req, res, next) {
    fs.unlink('sessions/' + req.sessionID + ".json", function (err) {
        if (err) {
            console.log(err);
        }

        req.session = null;
        res.redirect('/login');
    });
};