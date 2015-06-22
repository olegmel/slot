var edge = require('edge');
var combiner = require('./combiner.js');
var combo = require('./combo.js');
var consts = require('./consts.js');
var lineGen = require('./lineGen.js');
var program = require('./program.js');

var comboGen = edge.func(function(){/*
namespace Slot7
async (comboGen) =>
namespace Slot7
 {
 class ComboGen
 {
 private List<Combo> Combs;
 public double invSum = 0;
 private Random rand = new Random(DateTime.Now.Millisecond);

 public ComboGen(int[,] payTable)
 {
 Combs = new List<Combo>(payTable.Length);
 for(int s = 0; s < payTable.GetLength(0); ++s)
 for(int c = 0; c < payTable.GetLength(1); ++c)
 {
 int price = payTable[s, c];
 Combs.Add(new Combo(s, c + 1, price));
 invSum += price == 0 ? 0.0 : (1.0 / price);
 }
 var sorted = Combs.OrderBy(x => x.Price);
 Combs = sorted.Reverse().ToList();
 }

 public Combo GetCombo(double payBack)
 {
 double k = Combs.Count();
 double value = rand.NextDouble() * k / payBack;
 double integral = 0;
 foreach(var c in Combs.Where(x => x.Price != 0))
 {
 int price = c.Price;
 integral += 1.0 / price;
 if(integral >= value)
 return c;
 }
 return Combs.Last();
 }
 }
 }


 */});
comboGen('Node.js', result, error)
{
    if (error) throw error;
    console.log(result)
}