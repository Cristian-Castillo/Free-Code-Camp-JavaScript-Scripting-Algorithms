function smallestCommons(arr) {
  let x = arr[0]
  let y = arr[1]
  let list = [], children = [],masterList = []
  let swap = null
  /* Swap if element 0 is greater then element 1 */
  if(x > y){
    swap = x
    arr[0] = arr[1]
    arr[1] = swap
  }
  let start = arr[0]
  let end = arr[1]
  /* Create a sequential list of the range */
  for(var i = start; i <= end;i++){
    list.push(i)
  }
  let lenList = list.length
  let listNum = null
  let count = 2;
  /* Get the LCM number leave nodes */
  for(var i = 0; i < lenList; i++){
    listNum = list.shift()
      for(var j = listNum; j >= 1;j--){
          if((listNum % count) == 0){
            children.push(count)
            listNum /= count
            count = 2
          }
          if(listNum % count != 0){
            count++
          }
      }
   masterList.push(children)
   children = []
   count = 2
  }
  /* Leaf nodes (LCM) nested 2D array */
  count = 0
  let copyMaster = [...masterList], copyMasterLen = masterList.length
  let tempArray = null
  let uniqueArr = [], newArr = []

  for(var k = 0; k < copyMasterLen;k++){
    tempArray = copyMaster.shift()
    newArr = [...new Set(tempArray)]
    uniqueArr.push(newArr)
  }

  copyMaster = [...masterList]
  let item_list = null, getNum = null
  let getPair = [], duplicate = null
  /* Finding duplicates using for loop,returns the duplicate values not the pair */
  while(count < copyMasterLen){

    getNum = masterList.shift()
    item_list = getNum

    duplicate = item_list.reduce((acc,currentValue,index, array) => {
    if(array.indexOf(currentValue)!= index && !acc.includes(currentValue)){
      acc.push(currentValue)
    }
    return acc;
    }, []);
    getPair.push(duplicate)
    count++
  }
  count = 0
  let duplicateVal = getPair.flat()
  let newMaster = [...copyMaster]
  let flatArr = getPair.flat()
  let masterPairCount = [], subArr = null
  let numCount = null
  let finalPair = []

  // creating duplicates from retrieving the duplicate values
  while(count < newMaster.length){
    subArr = copyMaster.shift()

    for(var i = 0; i < flatArr.length;i++){
      for(var j = 0; j < subArr.length;j++){
        if(flatArr[i] == subArr[j]){
          numCount++
        }
      }
      if(numCount > 1){
        for(var l = 0; l < numCount;l++){
          masterPairCount.push(flatArr[i])
      }
      finalPair.push(masterPairCount)
      masterPairCount = []
      }
      numCount = 0
    }
    count++
  }
  count = 0


  /* Remove duplicates from uniqueArray */
  let flatUniqueArr = uniqueArr.flat()
  let removeFlatUniqueDups = [...new Set(flatUniqueArr)]
  let pairMaster = [finalPair[0]]
  const finalLength = finalPair.length
  let compareOne = null
  let compareOneLen = null

  /* Removed duplicate pairs */
  for(var j = 0; j < finalLength;j++){
    compareOne = finalPair.shift()
    compareOneLen = compareOne.length

    if(compareOneLen > pairMaster[0].length){
          pairMaster[0] = compareOne 
    }
    if(pairMaster[0][0] != compareOne[0]){
        pairMaster.push(compareOne)
    }
  }
  const uniqueLen = removeFlatUniqueDups.length
  /* Replace the unique list with the pairs, swapping */
  for(var i = 0; i < pairMaster.length;i++){
    for(var j = 0; j < uniqueLen;j++){
      if(removeFlatUniqueDups[j] == pairMaster[i][0]){
        removeFlatUniqueDups[j] = pairMaster[i]
      }
    }
  }
  let finalList = removeFlatUniqueDups.flat()
  const reducer = (accum,currentVal) => accum * currentVal
  let multResult = finalList.reduce(reducer)

  return multResult;
}

smallestCommons([1,5]);
