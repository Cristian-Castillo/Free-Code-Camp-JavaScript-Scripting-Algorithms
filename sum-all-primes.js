 function sumPrimes(num) {
  let list = [2],arr = []
  let tempNum = null, count = null

  /*Create copy list to compare*/
  for(var j = 3; j <= num;j++){
    arr.push(j)
  }

  /* If num is divisible more then once then it is not prime*/
  for(var i = 0;i <= num;i++){
    tempNum = arr.shift()
    for(var j = 2; j<= num;j++){
      if(tempNum % j == 0){
        count++
      }
    }
    if(count == 1){
      list.push(tempNum)
    }
    count = 0
  }
  
  /* Sum the list*/
  let reducer = (accumulator, currentValue) => accumulator+currentValue
  let sumList = list.reduce(reducer)
  return sumList;
} 

sumPrimes(10);
