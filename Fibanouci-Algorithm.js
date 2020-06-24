function sumFibs(num) {
  let x1 = 1,x2 = 1,xn = null
  let list = []
  list[0] = x1
  list[1] = x2
  let checkTwo = list[0]+list[1]
  let numCompare = 0, sumAccumulator = 0

  if(num < 2){
    return list[0]
  }
  else{
    if(checkTwo === 2){
      list.push(checkTwo)
    }
    let lenLength = list.length,count = 0
    while(count < num){
      xn = list[lenLength-1]+list[lenLength-2]
      list.push(xn)
      lenLength++
      count++
    }
  }
  let masterList = [...list]
  let masterLen = masterList.length

  for(var i = 0; i < masterLen;i++){
    numCompare = list.shift()
    if(numCompare % 2 !== 0){
      if(numCompare <= num){
        sumAccumulator += numCompare
      }
    }
  }
  
  return sumAccumulator
}

sumFibs(4);