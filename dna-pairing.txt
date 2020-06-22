function pairElement(str) {
  var tempStr = ''
  var list = [...str], upDateList = []
  var masterPair = [],outArray = [],count = 0

  for(var i = 0; i < str.length;i++){
    tempStr = list.shift()

    if(tempStr == 'A'){
      upDateList.push(tempStr)
      upDateList.push('T')
    }
    if(tempStr == 'T'){
      upDateList.push(tempStr)
      upDateList.push('A')
    }
    if(tempStr == 'C'){
      upDateList.push(tempStr)
      upDateList.push('G')
    }
    if(tempStr == 'G'){
      upDateList.push(tempStr)
      upDateList.push('C')
    }
  }
  const getLen = upDateList.length/2

  while(count < getLen){
    outArray.push([upDateList.shift(),upDateList.shift()])
    count++
  }
  return outArray;
}

pairElement("GCG");
