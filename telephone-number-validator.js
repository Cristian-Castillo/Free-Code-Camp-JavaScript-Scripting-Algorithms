function telephoneCheck(str) {
  let container = [], isValid = false
  let counter = 0, symbolCount = 0

  //removing nonalphanumeric characters
  for(var i = 0; i < str.length;i++){
    if(str[i] != '-' && str[i] != '(' && str[i] != ')' && str[i] != '*' && str[i] != '&' && str[i] != '!' && str[i] != '#' && str[i] != '?' && str[i] != ' '){
        container.push(str[i])
    }
    else if(str[i] == ')'){
      counter++
    }
    else if(str[i] == '('){
      counter++
    }
    else if(str[i] == '?'){
      symbolCount++
    }
    else if(str[0] == '-'){
      return isValid
    }
  }
  const containerLen = container.length

  if(containerLen <= 8){
    isValid = false
  }
  else if(containerLen == 11 || containerLen == 10){
    
    let key = parseInt(container[0])
    switch(key){
      case 2:
      isValid = false
      break
      case 5:
      isValid = true
      break
      case 1:
      isValid = true
      break
      case 0:
      isValid = false
      break
    }
  }

  if(counter == 1){
    isValid = false
  }
  else if(symbolCount == 1){
    isValid = false
  }
  return isValid;
}
telephoneCheck("555-555-5555");
