function fearNotLetter(str) {

const alphabetList = []
let charList = [...str],convertToChar = []
let holdStr = 0,flag = false
  // make a list from a-z
  for(var i = 97; i <= 122;i++){
      alphabetList.push(i)
  }
  //from copyied list convert from ch to number
  for(var j = 0; j < str.length;j++){
      holdStr = charList.shift()
      convertToChar.push(holdStr.charCodeAt())
  }
  // copy list again 
  const copyChar = [...convertToChar]
  let firstIndexOfChar = copyChar[0] // start point for alphabet
  let startPos = alphabetList.indexOf(firstIndexOfChar)
  let lenChar = copyChar.length // end point for alphabet
  let endPos = alphabetList.indexOf(copyChar[lenChar-1])
  let x = 0, result = 0
  // begin comparing str list against alphabetList[startPos ->endPos]
  for(var i = startPos; i < (endPos+1);i++){
    x = copyChar.shift()
    if(x == undefined){
      break
    }
  // if a difference is found from alphabet to copyChar list
  // store the result, set a flag due to event, and break out of loop
    if(alphabetList[i] != x){
        result = alphabetList[i]
        flag = true
        break
    }
  }
  //convert number back to char ch
  result = String.fromCharCode(result)

  if(flag){
  return result
  }
  else{
    return undefined
  }
}

fearNotLetter("abce");
