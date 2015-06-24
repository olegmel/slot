var execit = require("exec.it");

module.exports = function (cb) {
    execit("mono " + __dirname + "/Slot7.exe", function (err, stdout, stderr) {
        if (err) {
            console.log(stderr);
            cb(err, null);
        }

        cb(null, stdout);
    });
};