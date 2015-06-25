var gcController = require("../controllers/gamecodes");

module.exports.isAuth = function(req, res, next) {
    if(req.session !== null && req.session.gamecode !== undefined) {
        next();
    } else {
        res.redirect('/login');
    }
};

module.exports.updateSessionData = function(req, res, next) {
    if(req.session !== null && req.session.gamecode !== undefined) {

        var gamecode = new gcController(req.session.gamecode.login, req.session.gamecode.password);

        gamecode.getObject(function(err, data) {
            req.session.gamecode = data;

            next();
        });

    } else {
        res.redirect('/login');
    }
};