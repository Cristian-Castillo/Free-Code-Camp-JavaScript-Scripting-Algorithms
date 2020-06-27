function sumFibs(num) {
  let x1 = 1
  let x2 = 1
  let xn = null
  let list = []
  list.push(x1)
  list.push(x2)
  let numCompare = 0, sumAccumulator = 0

  if(num < 2){
    return 1
  }
  else{
    list.push(2)
    let lenLength = list.length,count = 0
    while(count <= num){
      xn = list[lenLength-2]+list[lenLength-1]
      list.push(xn)
      lenLength++
      count++
    }

    let masterList = [...list]
    let masterLen = masterList.length

    for(var i = 0; i < masterLen;i++){
      numCompare = list.shift()

      if(numCompare % 2 != 0){
        if(numCompare <= num){
          sumAccumulator += numCompare
        }
      }
    }
  }
  return sumAccumulator
}

sumFibs(4);