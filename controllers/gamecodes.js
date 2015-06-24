var crypto = require("./crypto");
var gc = require("../models/gamecodes");

function GamecodesCtrl(gamecode, password) {
    var gamecodeLogin = gamecode;
    var gamecodePassword = password;

    var clearObject = function(gcObject) {
        var result = {};

        result.createdOn = new Date(gcObject.createdOn);
        result.originalValue = gcObject.originalValue / 100;
        result.currentValue = gcObject.currentValue / 100;
        result.login = gamecodeLogin;
        result.balance = result.currentValue - result.originalValue;

        return result;
    };

    var comparePasswords = function(entered, real) {
            return entered === crypto.decodeData(real);
    };

    return {
        getObject: function(cb) {
            gc.getGamecodeByLogin(gamecodeLogin, function(err, data) {
                if(err) {
                     cb(err, null)
                }

                if(data !== null && comparePasswords(gamecodePassword, data.password)) {
                    cb(null, clearObject(data))
                } else {
                    cb(null, null);
                }
            });
        }
    };
}

module.exports = GamecodesCtrl;