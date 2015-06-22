/**
 * Created by Cameron Banowsky on 6/21/2015.
 */
var edge = require('edge');
var lineGen = require('./lineGen.js');
var consts = require('./consts.js');
var comboGen = require('./comboGen.js');
var combo = require('./combo.js');
var combiner = require('./combiner.js');

var program = edge.func(function(){/*
    async (program) => {

        {
            class Program
            {
                static void Main(string[] args)
            {
                List<Combo> combs = new List<Combo>();
                if (!ReadConfig(Consts.pays, out Consts.payback, out Consts.lineCount))
                Console.WriteLine("There is no config file or wrong configuration!");
                    else
            {
                var comboGen = new ComboGen(Consts.pays);
                var lineGen = new LineGen();
                int[,] result = null;
                    do
            {
                combs = new List<Combo>(Consts.lineCount);
                for (int i = 0; i < Consts.lineCount; ++i)
                combs.Add(comboGen.GetCombo(Consts.payback));
                result = Combiner.Combine(combs, lineGen);
            } while (result == null);
            PrintField(result);
            //uncomment next 2 lines to see what combinations won
            foreach (var c in combs.Where(x => x.Price > 0))
            Console.WriteLine(c);
        }
        Console.ReadKey();
    }

    private static void PrintField(int[,] field)
    {
        for (int y = 0; y < field.GetLength(0); ++y)
        {
            for (int x = 0; x < field.GetLength(1); ++x)
            Console.Write("{0} ", field[y, x]);
            Console.WriteLine();
        }
    }

    private static bool ReadConfig(int[,] payTable, out double payback, out int lineCount)
    {
        try
        {
            System.IO.StreamReader file = new System.IO.StreamReader("paytable.cfg");
            int symb = 0;
            string line;
            string[] chunks = null;
            while ((line = file.ReadLine()) != null)
            {
                chunks = line.Split(',');
                if (chunks.Length == 5)
                {
                    int[] arr = chunks.Select(x => Convert.ToInt32(x)).ToArray();
                    for (int i = 0; i < arr.Length; ++i)
                    {
                        payTable[symb, i] = arr[i];
                    }
                    ++symb;
                }
                else
                    break;
            }
            double.TryParse(chunks[0], NumberStyles.Number, CultureInfo.InvariantCulture, out payback);
            lineCount = Convert.ToInt32(chunks[1]);
            return true;
        }
        catch
        {
            payback = 0;
            lineCount = 0;
            return false;
        }
    }

    private static void PrintLine(int[] line)
    {
        for (int i = 0; i < line.Length; ++i)
        Console.Write("{0} ", line[i]);
        Console.WriteLine();
    }
}
}


}
*/});
program('Node.js', result, error)
{
    if (error) throw error;
    console.log(result)
}