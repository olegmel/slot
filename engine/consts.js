/**
 * Created by Cameron Banowsky on 6/21/2015.
 */
/**
 * Created by Sergey on 17.06.2015.
 */
//function consts(reelCount, rewCount, symbolCount, emptySymbol, pays, payback, lineCount) {
//    this.reelCount = reelCount;
//    this.rowCount = rewCount;
//    this.symbolCount = symbolCount;
//    this.emptySymbol = emptySymbol;
//    this.pays = pays;
//    this.payback = payback;
//    this.lineCount = lineCount;
//}
var edge = require('edge');
var combiner = require('./combiner.js');
var combo = require('./combo.js');
//var comboGen = require('./comboGen.js');
var lineGen = require('./lineGen.js');
var program = require('./program.js');

var consts = edge.func(function(){/*
async (consts) =>
 namespace Slot7
 {
 static class Consts
 {
 public const int reelCount = 5;
 public const int rowCount = 3;
 public const int symbolCount = 8;
 public const int emptySymbol = -1;
 public static int[,] pays = new int[symbolCount, reelCount];
 public static double payback = 0;
 public static int lineCount = 0;
 }
 }
*/});

consts('Node.js', result, error)
{
    if (error) throw error;
    console.log(result)
}