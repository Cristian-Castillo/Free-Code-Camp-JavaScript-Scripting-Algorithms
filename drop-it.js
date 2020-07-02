function dropElements(arr, func) {
  let count = null
  let lenArray = arr.length
  let tempNum = null, myFunc = null
  const array = [...arr], list = [],masterList = []
  let checkBool = null, myCounter = null

  while(count < lenArray){
    tempNum = array.shift()
    myFunc = func(tempNum)
    myCounter++

    list.push(myFunc)
    count++
  }
  console.log(list)
  count = 0
  let actualNum = null

  while(count < lenArray){
    checkBool = list.shift()

    if(checkBool === true){
       
       for(var j = 0; j < list.length;j++){
         list[j] = true
       }
       actualNum = arr.shift()
       masterList.push(actualNum)
    }
    else{
      arr.shift()
    }
    count++
  }
  arr = masterList
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
