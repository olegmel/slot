var Firebase = require("firebase");
var ref = new Firebase("https://havana.firebaseio.com/Gamecodes");

function GamecodesModel() {
    return {
        getGamecodeByLogin: function(gamecodeId, callback) {
            ref.on("value", function(snapshot) {
                if(gamecodeId in snapshot.val()) {
                    callback(null, snapshot.val()[gamecodeId]);
                    ref.off();
                } else {
                    callback(null, null);
                    ref.off();
                }
            }, function (errorObject) {
                callback(errorObject, null);
                console.log("The read failed: " + errorObject.code);
            });
        },

        updateGamecode: function(gamecodeId, updates) {
            var gamecodeRef = new Firebase("https://havana.firebaseio.com/Gamecodes/" + gamecodeId);

            try {
                console.log('we are updating');
                return gamecodeRef.update(updates);
            } catch(err) {
                throw err;
            }
        }
    };
}

module.exports = new GamecodesModel();