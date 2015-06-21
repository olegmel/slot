/**
 * Created by Cameron Banowsky on 6/21/2015.
 */
function LineGen()
{
    this.rand = new Random(DateTime.Now.Millisecond);

    public int[] GetLine(Combo combo)
    {
        var line = new List<int>(Consts.reelCount);
        int maxStartPosition = Consts.reelCount - combo.Count;
        int realStartPosition = rand.Next(maxStartPosition);
        List<int> stack = Enumerable.Range(0, Consts.symbolCount).ToList();
        stack.Remove(combo.Symbol);
        for(int i = 0; i < realStartPosition; ++i)
        {
            int randSymb = stack[rand.Next(stack.Count)];
            stack.Remove(randSymb);
            line.Add(randSymb);
        }
        for (int i = 0; i < combo.Count; ++i)
        line.Add(combo.Symbol);
        int tail = Consts.reelCount - realStartPosition - combo.Count;
        if (tail < 0)
            throw new ArithmeticException("tail must be non-negative");
        for(int i = 0; i < tail; ++i)
        {
            int randSymb = stack[rand.Next(stack.Count)];
            stack.Remove(randSymb);
            line.Add(randSymb);
        }
        return line.ToArray();
    }

    public int[] GetParsedLine(Combo combo)
    {
        var line = new int[Consts.reelCount];
        for (int i = 0; i < line.Length; ++i)
        line[i] = Consts.emptySymbol;
        var indexes = Enumerable.Range(0, 5).ToList();
        for(int i = 0; i < combo.Count; ++i)
        {
            int index = indexes[rand.Next(indexes.Count)];
            indexes.Remove(index);
            line[index] = combo.Symbol;
        }
        return line;
    }

    public void FillLineGaps(int[] line)
    {
        var already = line.Select(x => x).Distinct();
        List<int> stack = Enumerable.Range(0, Consts.symbolCount).ToList();
        foreach (var item in already)
        stack.Remove(item);
        for(int i = 0; i < line.Length; ++i)
        if (line[i] == Consts.emptySymbol)
        {
            line[i] = stack[rand.Next(stack.Count)];
            stack.Remove(line[i]);
        }
    }
}