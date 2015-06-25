var gcController = require("../controllers/gamecodes");
var userController = require("../controllers/users");

module.exports.getHandler = function(req, res, next) {
    res.render('login');
};

module.exports.postHandler = function(req, res, next) {
    var gamecode = new gcController(req.body.gamecode, req.body.password);

    req.session.gamecode = null;

    gamecode.getObject(function(err,  data) {
        if(err) {
            throw err;
        }

        if(data) {
            req.session.gamecode = data;

            var user = new userController(data.userId);
            user.getObject(function(err, user_data) {
                if(err) throw err;

                req.session.user = user_data;

                //if everything is successful
                res.redirect('/slot');
            });
        }

         else {
            res.status(403).end('Gamecode or password isn\'t correct');
        }
    });
};