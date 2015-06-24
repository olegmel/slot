var slotAlgo = require("../run.js");
var WinCtrl = require("./win");

function AlgoCtrl(result) {
    this.result = result;

    var winsArr = [];

    this.parseNumbersToArray = function() {
        return result.substr(0, 34).split("\n").slice(0, -1); //last index equals to empty string, so cut it
    };

    this.parseWin = function() {
        if(result.length < 34) {
            winsArr.push(new WinCtrl(''));
            return winsArr;
        }

        var wins = result.substr(33).split("\n").slice(0, -1);


        wins.forEach(function(win) {
            winsArr.push(new WinCtrl(win));
        });

        return winsArr;
    };

    this.prepareResponse = function() {
        var response = {};

        response.numbers = this.parseNumbersToArray();
        response.wins = this.parseWin();
        response.winSum = 0;

        response.wins.forEach(function(win) {
            response.winSum += win.price;
        });

        return JSON.stringify(response);
    };
}

module.exports = AlgoCtrl;
