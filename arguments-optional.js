function addTogether(...arr){
  let checkTypeList = [], groupNum = []
  let numCheck = typeof(1), objCheck = typeof({})

  if(arr.length == 1 && typeof(arr[0]) == numCheck){
      return function(y){
        if(typeof(y) == objCheck){
          return undefined
        }
        return arr[0]+y
      }
  }
  for(var j = 0; j < arr.length;j++){
    checkTypeList.push(typeof(arr[j]))
    
    if(checkTypeList[j] != numCheck){
      return undefined
    }
    else{
      groupNum.push(arr[j])
    }
  }

  const sumList = groupNum.reduce((acc,cVal) => acc+cVal)
  return sumList
}

addTogether(2,3);
