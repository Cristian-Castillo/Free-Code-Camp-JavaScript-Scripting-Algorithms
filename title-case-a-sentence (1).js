function titleCase(str) {
  
  var list = []
  var arr = [...str]
  var count = 0;
  var tempVar = 0;
  var emptyStr = ''

  for(var k = 0; k < str.length;k++){
    if(k == 0){
      list.push(k)
    }
    else if(str[k] == ' '){
      count = k+1
      list.push(count)
      count = 0
    }
    arr[k] = arr[k].toLowerCase()
  }
  var lengthList = list.length;
 
  while(lengthList > 0){
    tempVar = list.shift()
    arr[tempVar] = arr[tempVar].toUpperCase()
    lengthList--
  }
  
  for(var j = 0; j < str.length;j++){
    emptyStr += arr[j]
  }
  str = emptyStr
  return str;
}

titleCase("I'm a little tea pot");
