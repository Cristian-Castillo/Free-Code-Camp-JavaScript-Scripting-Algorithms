function diffArray(arr1, arr2) {
  var a1 = [...arr1]
  var a2 = [...arr2]
  var getNum = 0
  var count = 0
  var indexPos = 0
  var newArr = [];
  
  while(count < arr1.length){
    getNum = a1.pop()
    indexPos = arr2.indexOf(getNum)
  
    if(indexPos == -1){
      newArr.push(getNum)
      count++
    }
    else{
      count++
    }
  }
  count = 0
  while(count < arr2.length){
    getNum = a2.pop()
    indexPos = arr1.indexOf(getNum)

    if(indexPos == -1){
      newArr.unshift(getNum)
      count++
    }
    else{
      count++
    }
  }
  console.log(newArr)
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
