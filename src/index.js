function factorial (num, isOdd){
  var result = BigInt(1);
  for(var i = 1; i <= num; i++)
  {
      if( isOdd === null)
        result *= BigInt(i);
      if(isOdd !== null && isOdd && i % 2 > 0)
        result *= BigInt(i);
      if(isOdd !== null && !isOdd && i % 2 === 0)
        result *= BigInt(i);   
  }
  return result;
}

module.exports = function zeros(expression) {
  var itemsOfExpression = expression.split("*");
  var resultOfExpression = 1n;
  var result = 0;
  itemsOfExpression.forEach(element => {
      var num = Number(element.split("!")[0]);
      if(element.includes("!!"))
        resultOfExpression *= factorial(num, num % 2 > 0);
      else
        resultOfExpression *= factorial(num, null);
  });
  while(resultOfExpression % 10n === 0n)
  {
      result++;
      resultOfExpression = resultOfExpression / 10n;
  }
  return result;
}

