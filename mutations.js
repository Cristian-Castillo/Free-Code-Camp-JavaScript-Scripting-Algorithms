function mutation(arr) {

  var tempArray = [...arr]
  var numOne = tempArray.shift()
  var numTwo = tempArray.shift()
  var listOne = [],listTwo = []
  var flag = false,justSaw = false
  var listLen = 0

  for(var k = 0; k < numOne.length;k++){
    listOne[k] = numOne[k].toLowerCase()
  }
  for(var k = 0; k < numTwo.length;k++){
    listTwo[k] = numTwo[k].toLowerCase()
  }
  listLen = listOne.length+listTwo.length
 
  var myY = listTwo.pop()
  var yIndexPos = listOne.indexOf(myY)
  var x = listTwo.shift()
  var indexPos = listOne.indexOf(x)
  var listLengthTwo = (listTwo.length+2)
  if(yIndexPos == -1){
    return false
  }
  
  while(listLengthTwo > 0){

    if(indexPos != -1){
      flag = true
    }
    else{
      flag = false
    }
    x = listTwo.shift()
    listLengthTwo--
  }

  return flag;
}

mutation(["hello", "hey"]);
