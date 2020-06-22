function myReplace(str, before, after) {
  var copyAfter = [...after], strTemp = [...str]
  var setBeforeStr = before.charCodeAt() // charCodeAt only works on strings
  var x = 0, y = '', tempStr = '',indexNum = [],elements = '',newStr = '',strLen = strTemp.length
  let list = []
  /* checks 2nd argument if cap, then turn 3rd arg to cap */
  if(setBeforeStr >= 65 && setBeforeStr <= 90){
      x = copyAfter.shift()
      y = x.toUpperCase()
      copyAfter.unshift(y)
      for(var k = 0; k < copyAfter.length;k++){
        tempStr += copyAfter[k]
      }
      after = tempStr
  }
  /* putting strings into a list array */
   for(var i = 0; i < strLen;i++){
    if(strTemp[i] != ' '){
       elements += strTemp[i]
       if(strTemp[i+1] ==  ' '){
         list.push(elements)
         elements = ''
         indexNum.push(i+1)
       }
    }
  }
  /* Takes care of last string in sentence and puts in list array */
  x = indexNum.pop()+1
  while(x < strTemp){
    elements += strTemp[x]
    x++
  }
  list.push(elements)
  /* The swap happens here by loooking through the list and comparing before, then swap */
  for(var i = 0; i < list.length;i++){
    if(list[i] == before){
      list[i] = after
    }
  }
  /* Added spaces to the end of array elements, and turn back to string */
  for(var i = 0; i < list.length-1;i++){
    list[i] = list[i]+' '
    newStr += list[i]
  }
  var tempLastElement = list.pop()
  newStr += tempLastElement
  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
