module.exports.getHandler = function(req, res, next) {
    if(req.session.user !== null) {

        var response = {};
        response.userId = req.session.gamecode.userId;
        response.gamecode = req.session.gamecode.login;

        res.send(response);
        res.status(200).end();
    } else {
        res.status(403).end('Non authorized access');
    }
};