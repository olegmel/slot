var Firebase = require("firebase");
var ref = new Firebase("https://havana.firebaseio.com/Users");

function UsersModel() {
    return {
        getUserByUserId: function(userId, callback) {
            ref.on("value", function(snapshot) {
                if(userId in snapshot.val()) {
                    callback(null, snapshot.val()[userId]);
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

module.exports = new UsersModel();