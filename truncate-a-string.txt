œœfunction truncateString(str, num) {

  var strLen = str.length
  if(strLen <= num){
    return str
  }
  else{
    // I took the sub string and max length allotted
    var tempStr = str.substring(0,num) 
    // I created an escapse charater for the 3...
    var dot = '\...'
    // an empty string will add the characters into one string
    // which can be alœso an array
    var emptyStr = ''
    // I copied the substring from the string into a new array
    // called tempArr
    var tempArr = [...tempStr]
    // I pushed the 3 dots onto the back of the list
    tempArr.push(dot)
    // using a forloop I added each element 
    // from the string that were broken down into 
    // indicies into an empty string joining them
    // back to a string
    for(var k = 0; k < tempArr.length;k++){
      emptyStr += tempArr[k]
    }
    return emptyStr;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
