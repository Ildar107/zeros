function getZeroCount(num, isOdd){
  var fiveCounter = 0;
  var twoCounter = 0;
  for(var i = 1; i <= num; i++)
  {
      if(i % 5 === 0 && i % 10 !== 0 && (isOdd === null || isOdd))
        fiveCounter += getCount(i ,5);
      if(i % 2 === 0 && (isOdd === null || !isOdd))
      {  
        twoCounter += getCount(i ,2);  
        fiveCounter += getCount(i, 5);
      } 
    }
  return {fiveCounter, twoCounter};
}

module.exports = function zeros(expression) {
  var itemsOfExpression = expression.split("*");
  var fiveCounter = 0;
  var twoCounter = 0;
  itemsOfExpression.forEach(element => {
      var num = Number(element.split("!")[0]);
      if(element.includes("!!"))
      {
        if(num % 2 > 0)
            fiveCounter += getZeroCount(num, true).fiveCounter;
        else
        {
          let tuple =  getZeroCount(num, false);
          fiveCounter += tuple.fiveCounter;
          twoCounter += tuple.twoCounter;
        }
      }
      else
      {
        let tuple =  getZeroCount(num, null);
        fiveCounter += tuple.fiveCounter;
        twoCounter += tuple.twoCounter;
      }
  });
  return Math.min(fiveCounter, twoCounter);
}

function getCount(number, base) {
  var count = 0;
  while(number % base === 0)
  {  
    number /= base;
    count++;
  } 
  return count;
};


