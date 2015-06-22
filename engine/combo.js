/**
 * Created by Cameron Banowsky on 6/21/2015.
 */
var edge = require('edge');
var combiner = require('./combiner.js');
//var consts = require('./consts.js');
var lineGen = require('./lineGen.js');
var program = require('./program.js');

var combo = edge.func(function(){/*
namespace Slot7
async (combo) =>
 namespace Slot 7
 {
 class Combo : IComparable, IComparable<Combo>, IEquatable<Combo>
 {
 public int Symbol { get; private set; }
 public int Count { get; private set; }
 public int Price { get; private set; }

 public Combo(int s, int c, int price)
 {
 Symbol = s;
 Count = c;
 Price = price;
 }

 public override string ToString()
 {
 if (Count == 1)
 return string.Format("No combination");
 return string.Format("{0} symbols #{1}. Price {2}", Count, Symbol, Price);
 }

 public int CompareTo(object obj)
 {
 var combo = obj as Combo;
 if (combo != null)
 CompareTo(combo);
 throw new ArgumentException("It's supposed to be Combo");
 }

 public int CompareTo(Combo other)
 {
 int prComp = this.Price.CompareTo(other.Price);
 if (prComp != 0)
 return prComp;
 return this.Count.CompareTo(other.Count);
 }

 public bool Equals(object obj)
 {
 var combo = obj as Combo;
 if (combo == null)
 return false;
 return Equals(combo);
 }

 public bool Equals(Combo other)
 {
 return other.Symbol == Symbol && other.Count == Count && other.Price == Price;
 }

 public override int GetHashCode()
 {
 int hashSymb = (Symbol + 1).GetHashCode();
 int hashCount = (Count + 10).GetHashCode();
 int hashPrice = (Price + 1000).GetHashCode();
 return hashPrice * hashCount * hashSymb;
 }
 }
 }
*/});

combo('Node.js', result, error)
{
    if (error) throw error;
    console.log(result)
}