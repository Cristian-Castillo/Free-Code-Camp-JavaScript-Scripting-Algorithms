function findElement(arr, func) {
  var container = []

  for(var k = 0; k < arr.length;k++){
    if((arr[k] % 2) == 0){
      container.unshift(arr[k])
    }
  }
  var getNum = container.pop()
  var result = func(getNum)
  if(result) return getNum
  else return undefined
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
