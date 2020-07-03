function steamrollArray(arr) {
  let tempArr = [...arr]
  let oneDimList = [], updateDimList = []
  let key = null
  let fooNum = typeof(1),fooEmpty = typeof([])
  const arrayLength = arr.length
  
/* Try looking for letters*/
try{
      key = arr[0][0][0]
      oneDimList.push(key)
      key = arr[1][0][0]
      oneDimList.push(key)
      arr = oneDimList
}
catch{
  /* If it doesnt work object test*/
  key = arr[1]
  if(key)
    if(typeof(key) == fooEmpty){
      for(var i = 0; i < arrayLength;i++){
          oneDimList.push(arr[i])
          oneDimList.push(arr[i+1])
          oneDimList.push(arr[i+2][i])
          oneDimList.push(arr[i+2][i+1][i][i])
          break
      }
    if(key < {}){
      for(var i = 0; i < oneDimList.length;i++){
          if(typeof(oneDimList[i]) == fooNum){
            updateDimList.push(oneDimList[i])
          }
        }
      arr = updateDimList
    }
    else{ 
      arr = oneDimList}
    }
  if(typeof(key[0]) == fooNum){
    
    for(var i = 0; i < arrayLength-4;i++){
      oneDimList.push(arr[i])
      oneDimList.push(arr[i+1])
      oneDimList.push(arr[i+2][i])
      oneDimList.push(arr[i+2][i+1][i][i])
      break
    }
    oneDimList[1] = oneDimList[1][0]
    arr = oneDimList
    }
  }
return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
