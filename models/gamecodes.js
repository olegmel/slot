var Firebase = require("firebase");
var ref = new Firebase("https://havana.firebaseio.com/Gamecodes");

function GamecodesModel() {
    return {
        getGamecodeByLogin: function(gamecodeId, callback) {
            ref.on("value", function(snapshot) {
                if(gamecodeId in snapshot.val()) {
                    callback(null, snapshot.val()[gamecodeId]);
                } else {
                    callback(null, null);
                }
            }, function (errorObject) {
                callback(errorObject, null);
                console.log("The read failed: " + errorObject.code);
            });
        }
    };
}

module.exports = new GamecodesModel();