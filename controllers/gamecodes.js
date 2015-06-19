var crypto = require("./crypto");

function GamecodesCtrl() {
    return {
        comparePasswords: function(entered, real) {
            return entered === crypto.decodeData(real);
        }
    };
}

module.exports = new GamecodesCtrl;