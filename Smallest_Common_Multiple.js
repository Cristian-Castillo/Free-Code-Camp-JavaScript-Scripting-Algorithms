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
  }j
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
  console.log(masterList)
  console.log(uniqueArr)

  let dups = [...masterList]
  let arrMaster = [...masterList]
  let numArray = null, pairArray = []
  let numLen = null,numers = null
  let counter = 0, indexers = 0

// Find duplicates using for loop
let item_list = [1,2,3,4,5,5,5,7,8,2,3,4,4,4,4,4];

let duplicate = item_list.reduce((acc,currentValue,index, array) => {
  if(array.indexOf(currentValue)!= index && !acc.includes(currentValue)) acc.push(currentValue);
  return acc;
}, []);

console.log('Duplicate items are ' + duplicate.join(','));

  for(var k = 0; k < copyMasterLen;k++){
    numArray = arrMaster.shift()
    numers = numArray.pop()
    numLen = numArray.length
    
    while(counter < numLen){
    
    if(numArray[counter] == numers){
      indexers++
    }

    counter++
    }
  }
  console.log(indexers)

  /* Getting pairs */
  for(var i = 0; i < dups.length;i++){
    for(var j = 0; j <= dups[i].length;j++){
      
      if(j == 0){
          numOne = dups[i][j]
          count++
      }
      if(numOne == dups[i][j+1]){
          count++
      }
    }


    if(count > 1){
      for(var l = 0; l < count; l++){
        if(numOne == undefined){
          break
        }
        pairList.push(numOne)
      }
    }  
    let newLenPair = pairList.length
    if(newLenPair > 1){
      masterPair.push(pairList)
    }
    pairList = []
    count = 0
  }
  count = 0

  for(var i = 0; i < dups.length;i++){
    for(var j = 0; j <= dups[i].length;j++){
      if(j == 1){
          numOne = dups[i][j]
          count++
      }
      if(numOne == dups[i][j+1]){
          count++
      }
    }
    if(count > 1){
      for(var l = 0; l < count; l++){
        if(numOne == undefined){
          break
        }
        pairList.push(numOne)
      }
    }  
    masterPair.push(pairList)
    pairList = []
    count = 0
  }
  console.log('----Master---')
  console.log(masterPair)
  console.log('----Defined----')
  const definedPair = masterPair.filter((num) => num.length >= 2)
  console.log(definedPair)
  console.log(uniqueArr)
  console.log(definedPair)

 /* Check Mark */

  let getFirstPairNum = []

  for(var j = 0; j < definedPair.length;j++){
    getFirstPairNum.push(definedPair[j][0])
  }
  let tempCompare = null
  let updatedFinalList = []

  for(var i = 0;i < uniqueArr.length;i++){
    for(var j = 0; j < uniqueArr.length;j++){
      if(uniqueArr[i][j] == undefined){
        break
      }
      updatedFinalList.push(uniqueArr[i][j])
    }
  }
  console.log(updatedFinalList)

  let counter = 0
  let lenPair = getFirstPairNum.length
  let newNew = []

  while(counter < lenPair){
    tempCompare = getFirstPairNum.shift()
    for(var j = 0; j < updatedFinalList.length;j++){
      if(tempCompare != updatedFinalList[j]){
          newNew.push(updatedFinalList[j])
      }
    }
    counter++
  }
  console.log(newNew)

  let masterFilter = newNew.filter((num) => num > 0)

  const defineLen = definedPair.length
  for(var j = 0; j < defineLen;j++){
    for(var k = 0; k < defineLen;k++){
      if(definedPair[j][k] == undefined){
        break
      }
      newNew.push(definedPair[k])
    }
  }
 
  Good from here !
  const reducer = (accum,currentVal) => accum * currentVal
  let resultPairProduct = groupPairs.reduce(reducer)
  const reducerMaster = (accumTwo,currentValTwo) => accumTwo * currentValTwo
  let resultMasterProduct = masterFilter.reduce(reducerMaster)
  console.log(resultPairProduct)
  console.log(resultMasterProduct)

  const masterProduct =  resultPairProduct*resultMasterProduct
  console.log(masterProduct)
  return;
}
smallestCommons([23,18]);