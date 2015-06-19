var Firebase = require("firebase");
var ref = new Firebase("https://havana.firebaseio.com/Gamecodes");
var async = require("async");

var gcController = require("../controllers/gamecodes");

function GamecodesModel() {
    return {
        gamecodeObject: null,

        storeGamecodeObject: function(gamecodeObject) {
            this.gamecodeObject = gamecodeObject;
        },

        getGamecodeByLogin: function(gamecodeId) {
            var self = this;
            ref.on("value", function(snapshot) {
                console.log(gamecodeId);

                if(gamecodeId in snapshot.val()) {
                    console.log('yep');
                    self.storeGamecodeObject(snapshot.val()[gamecodeId]);
                } else {
                    console.log('nope');
                    self.storeGamecodeObject(null);
                }
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });

        }


    };
}

module.exports = new GamecodesModel();

