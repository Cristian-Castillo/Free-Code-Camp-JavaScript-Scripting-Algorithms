function repeatStringNumTimes(str, num) {
  var emptyStr = ""
  if(num <= 0){
    str = ""
    return str
  }
  else{
    while(num > 0)
    {
      emptyStr += str
      num = num-1
    }
    str = emptyStr
    return str
  }
}

repeatStringNumTimes("abc", 3);
