var edge = require('edge');
var combo = require('./combo.js')
var comboGen = require('./comboGen.js');
var consts = require('./consts.js');
var lineGen = require('./lineGen.js');
var program = require('./program.js');

var combiner = edge.func(function(){/*
async (combiner) =>
 namespace Slot 7
 {
 static class Combiner
 {
 private static int maxTries = 10;
 private static Random rand = new Random(DateTime.Now.Millisecond);
 static public int[,] Combine(IEnumerable<Combo> combs, LineGen gen)
 {
 var lines = new int[Consts.rowCount, Consts.reelCount];
 var copy = new int[Consts.rowCount, Consts.reelCount];
 for (int y = 0; y < Consts.rowCount; ++y)
 for (int x = 0; x < Consts.reelCount; ++x)
 lines[y, x] = Consts.emptySymbol;
 var winCombs = combs.Where(x => x.Price > 0);
 var sorted = combs.OrderByDescending(x => x).ToList();
 bool done = true;
 for (int lineInd = 0; lineInd < sorted.Count(x => x.Count > 1); ++lineInd)
 {
 done = false;
 for (int tries = 0; tries < maxTries; ++tries)
 {
 var line = gen.GetParsedLine(sorted[lineInd]);
 CopyField(lines, copy);
 done = Line.FillIfEmpty(copy, line, rand.Next(Consts.lineCount));
 if (done)
 {
 try
 {
 var res = FindCombos(copy, Consts.lineCount);
 if (IsNoRedundantCombos(winCombs, copy, false))
 {
 CopyField(copy, lines);
 break;
 }
 }
 catch { }
 done = false;
 }
 }
 }
 if (done && IsNoRedundantCombos(winCombs, lines, true))
 for (int tries = 0; tries < maxTries; ++tries)
 {
 CopyField(lines, copy);
 TryFillGaps(copy, gen);
 if (IsNoRedundantCombos(winCombs, copy, true))
 {
 return copy;
 }
 }
 return null;
 }

 private static bool IsNoRedundantCombos(IEnumerable<Combo> winCombos, int[,] field, bool finalCheck)
 {
 try
 {
 var res = FindCombos(field, Consts.lineCount);
 return res.All(x => winCombos.Contains(x)) && (!finalCheck || res.Count() == winCombos.Count());
 }
 catch
 {
 return false;
 }
 }

 private static void CopyField(int[,] from, int[,] to)
 {
 for (int y = 0; y < Consts.rowCount; ++y)
 for (int x = 0; x < Consts.reelCount; ++x)
 to[y, x] = from[y, x];
 }

 private static List<Combo> FindCombos(int[,] field, int lineCount)
 {
 var combos = new List<Combo>();
 for(int lineInd = 0; lineInd < lineCount; ++lineInd)
 {
 int[] line = Line.GetLine(field, lineInd);
 var combs = FindCombo(line);
 if (combs != null)
 combos.AddRange(combs);
 }
 return combos;
 }

 private static List<Combo> FindCombo(int[] line)
 {
 var symbs = line.Where(x => x != Consts.emptySymbol).Distinct();
 var combs = new List<Combo>();
 foreach (var symb in symbs)
 {
 int symbCount = line.Count(x => x == symb);
 if (symbCount > 1)
 {
 int comboPrice = Consts.pays[symb, symbCount - 1];
 combs.Add(new Combo(symb, symbCount, comboPrice));
 }
 }
 return combs.Where(x => x.Price > 0).ToList();
 }

 private static bool TryFillGaps(int[,] field, LineGen gen)
 {
 for(int row = 0; row < Consts.rowCount; ++row)
 {
 var line = Line.GetLine(field, row);
 gen.FillLineGaps(line);
 for (int i = 0; i < line.Length; ++i)
 field[row, i] = line[i];
 }
 return true;
 }
 }

 static class Line
 {
 static private Cell[,] cells =
 {
 { new Cell(0,0), new Cell(1,0), new Cell(2, 0), new Cell(3, 0), new Cell(4, 0)},
 { new Cell(0,1), new Cell(1,1), new Cell(2, 1), new Cell(3, 1), new Cell(4, 1)},
 { new Cell(0,2), new Cell(1,2), new Cell(2, 2), new Cell(3, 2), new Cell(4, 2)},
 { new Cell(0,0), new Cell(1,1), new Cell(2, 2), new Cell(3, 1), new Cell(4, 0)},
 { new Cell(0,2), new Cell(1,1), new Cell(2, 0), new Cell(3, 1), new Cell(4, 2)}
 };

 public static bool FillIfEmpty(int[,] field, int[] line, int lineNumber)
 {

 for(int ind = 0; ind < line.Length; ++ind)
 if (line[ind] != Consts.emptySymbol && field[cells[lineNumber, ind].Y, cells[lineNumber, ind].X] != Consts.emptySymbol)
 return false;
 for(int ind = 0; ind < line.Length; ++ind)
 if(line[ind] != Consts.emptySymbol)
 field[cells[lineNumber, ind].Y, cells[lineNumber, ind].X] = line[ind];
 return true;
 }

 public static int[] GetLine(int[,] field, int lineNumber)
 {
 var line = new int[Consts.reelCount];
 for (int ind = 0; ind < line.Length; ++ind)
 line[ind] = field[cells[lineNumber, ind].Y, cells[lineNumber, ind].X];
 return line;
 }
 }

 class Cell
 {
 public int X { get; private set; }
 public int Y { get; private set; }

 public Cell(int x, int y)
 {
 X = x;
 Y = y;
 }
 }
 }

 */});

combiner('Node.js', result, error)
{
    if (error) throw error;
    console.log(result)
}