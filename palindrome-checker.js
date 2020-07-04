function palindrome(str) {
 let newStr = ''
 let copyStr = ''
 let arrSub = []
 let masterLen = str.length
 let isPalindrome = false
  // removing non alphanumeric characters
  for(var i = 0; i < masterLen;i++){
    if(str[i] != '_' && str[i] != ' ' && str[i] != '.' && str[i] != ',' && str[i] != '*' && str[i] != '#' && str[i] != '(' && str[i] != '\\' && str[i] != '-' && str[i] != ':' && str[i] != ')' && str[i] != '/' && str[i] != '|'){
        arrSub.push(str[i])
    }
  }
  // making into string and auto lower case all str ch's
  for(var j = 0; j < arrSub.length;j++){
    newStr += arrSub[j]
    newStr = newStr.toLowerCase()
  }
  // store string 1 to be compared to string 2
  copyStr = newStr
  let strCompare = newStr.split('').reverse().join('')
  // if the reverse str 1 is equal to str 2 then is palindrome
  if(copyStr == strCompare){
    isPalindrome = true
  }
  else{
    isPalindrome = false
  }
  return isPalindrome;
}



palindrome("eye");
