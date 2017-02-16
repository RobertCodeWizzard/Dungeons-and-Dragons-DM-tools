function rollDice(diceMatrix)
{
  var rollTotal = 0;
  for (var i = 0; i < diceMatrix.length; i++)
  {
    for (var j = 0; j < diceMatrix[i[0]]; j++)
    {
      rollTotal += math.floor(math.random()*diceMatrix[i[1]]);
    }
  }
  return rollTotal;
};
