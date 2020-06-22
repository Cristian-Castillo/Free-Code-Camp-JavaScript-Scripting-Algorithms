function findLongestWordLength(str) {

  var newStrLen = 0;
  var arr = []
  var swap = 0;

  for(var k = 0; k < str.length;k++){
    if(str[k] == ' '){
      arr.push(newStrLen)
      newStrLen = 0
    }
    else if(str[k] != ' '){
      newStrLen++;
    }  
  }
  arr.push(newStrLen)
 
  for(var j = 0; j < arr.length;j++){
      if(arr[j] > arr[j+1]){
        swap = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = swap
      }
  }
  return arr.pop()

}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
