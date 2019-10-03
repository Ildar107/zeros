function factorial (num, isOdd){
  var fiveCounter = 0;
  var twoCounter = 0;
  for(var i = 1; i <= num; i++)
  {
      if(i % 5 === 0 && i % 10 !== 0 && (isOdd === null || isOdd))
        fiveCounter += i/5;
      if(i % 2 === 0 && i % 10 !== 0)
        twoCounter += i/2;  
      if(i % 10 === 0)
      {
        fiveCounter ++;
        fiveCounter += i/10 === 5 ? 1 : 0;
        twoCounter++;
      } 
  }
    return {
      fiveCounter: fiveCounter,
      twoCounter: twoCounter
    };
  
}

module.exports = function zeros(expression) {
  var itemsOfExpression = expression.split("*");
  var resultOfExpression = 1n;
  var result = 0;
  var fiveCounter = 0;
  var zeroCounter = 0;
  var twoCounter = 0;
  itemsOfExpression.forEach(element => {
      var num = Number(element.split("!")[0]);
      if(element.includes("!!"))
      {
        if(num % 2 > 0)
        {
            fiveCounter += factorial(num, true).fiveCounter;
        }
        else
        {
          let temp =  factorial(num, false);
          fiveCounter += temp.fiveCounter;
          twoCounter += temp.twoCounter;
        }
      }
      else
      {
        let temp =  factorial(num, null);
        fiveCounter += temp.fiveCounter;
        twoCounter += temp.twoCounter;
      }
  });
  console.log( fiveCounter + " " + twoCounter )
    zeroCounter = Math.min(fiveCounter, twoCounter);

  return zeroCounter;
}

