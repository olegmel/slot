var Firebase = require("firebase");
var ref = new Firebase("https://havana.firebaseio.com/Gamecodes");
var async = require("async");

function Gamecodes() {
    this.gamecodesArr = [];

    return {
        getGamecodes: function(arr) {
            ref.on("value", function(snapshot) {
                console.log(snapshot.val());
                console.log(snapshot.val().length);

            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });

        }
    };
}

module.exports = new Gamecodes();

