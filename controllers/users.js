var users = require("../models/users");

function UsersCtrl(userId) {
    var user = userId;

    var clearObject = function(userObject) {
        var result = userObject;

        //result.createdOn = new Date(gcObject.createdOn);
        //result.originalValue = gcObject.originalValue / 100;
        //result.currentValue = gcObject.currentValue / 100;
        //result.login = gamecodeLogin;
        //result.balance = result.currentValue - result.originalValue;

        return result;
    };


    return {
        getObject: function(cb) {
            users.getUserByUserId(userId, function(err, data) {
                if(err) {
                    cb(err, null)
                }

                if(data !== null) {
                    cb(null, clearObject(data))
                } else {
                    cb(null, null);
                }
            });
        }
    };
}

module.exports = UsersCtrl;