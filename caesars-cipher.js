function rot13(str) {
  let tempStr = ''
  let container = []
  // Put string into container
  for(var j = 0; j < str.length;j++){
    tempStr = str[j]
    if(tempStr == '?' || tempStr == '!' || tempStr == '.' || tempStr == ' '){
      container.push(tempStr)
    }
    else{
      tempStr = (tempStr.charCodeAt(tempStr))
      if(tempStr >= 65 && tempStr <= 91){
        if((tempStr-13) >= 65){
          tempStr -= 13
        }
        else if((tempStr-13) < 65){
          tempStr += 13
        }
        container.push(String.fromCharCode(tempStr))
      }
    }
  }
  tempStr = ''
  // Make array of letters into string
  for(var j = 0; j < container.length;j++){
    tempStr += container[j]
  }
  return tempStr;
}

rot13("SERR PBQR PNZC");
