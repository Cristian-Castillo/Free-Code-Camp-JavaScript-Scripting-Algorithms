function binaryAgent(str) {
  let copyStr = [...str]
  let listOfStr = [], container = []
  let counter = 0, newContainer = []
  //turn strings into a string of arrays
  for(var j = 0; j < str.length;j++){
    if(copyStr[j] != ' '){
      container[j] = parseInt(copyStr[j])
    }
    else if(copyStr[j] == ' '){
      listOfStr.push(container)
      container = []
    }
  }
  //Get last string and push into contianer
  for(var j = str.length; j > 0;j--){
    if(copyStr[j] == undefined){
      listOfStr.push(container)
      break
    }
    else if(copyStr[j] != ' '){
      container = copyStr[j]
    }
  }
  const listLen = listOfStr.length

  while(counter < listLen){
    let x = listOfStr.shift()
    let newArray = x.filter((num) => num >= 0)
    newContainer.push(newArray)
    x = null
    newArray = null
    counter++
  }
  container = []
  let accumulator = null
  // Binary to Char conversion
  for(var i = 0; i < newContainer.length;i++){
    for(var j = 0; j < newContainer[i].length;j++){

      if(newContainer[i][j] === 1){
        let position = j

        switch(position){
          case 0:
          accumulator += Math.pow(2,7)
          break
          case 1:
          accumulator += Math.pow(2,6)
          break
          case 2:
          accumulator += Math.pow(2,5)
          break
          case 3:
          accumulator += Math.pow(2,4)
          break
          case 4:
          accumulator += Math.pow(2,3)
          break
          case 5:
          accumulator += Math.pow(2,2)
          break
          case 6:
          accumulator += Math.pow(2,1)
          break
          case 7:
          accumulator += Math.pow(2,0)
          break
        }
      }
    }
    container.push(String.fromCharCode(accumulator))
    accumulator = 0
  }
  //Convert to string and return
  let tempStr = ''
  for(var j = 0; j < container.length;j++){
    tempStr+=container[j]
  }
  return tempStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
