function uniteUnique(arr) {
  let temp = [...arguments]
  let lengthList = temp.length
  let list = []
  let uniqueList = []
  let x = 0, count = 0,holdThisNum = 0,checkingUniqueList = 0
  // put 2D array into 1 list
  for(var i = 0; i < lengthList;i++){
    for(var j = 0; j < temp[i].length;j++){
        x = temp[i][j]
        if(x == undefined){
          break
        }
       list.push(x)
    }
  }
  let listLength = list.length
  //since we have empty unique list
  // if the indexOf returns -1
  // then evidently it is not in our new
  // unique list! Hence, push it
  // else it must be in our list and do nothing
  // but repeat the shift of the old list
  while(count < listLength){
    holdThisNum = list.shift()
    checkingUniqueList = uniqueList.indexOf(holdThisNum)
    if(checkingUniqueList == -1){
      uniqueList.push(holdThisNum)
    }
    count++
  }
  return uniqueList;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
