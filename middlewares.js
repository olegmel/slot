exports.isAuth = function(req, res, next) {
    if(req.session.gamecode !== null && req.session.gamecode !== undefined) {
        next();
    } else {
        res.redirect('/login');
    }
};