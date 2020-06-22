function confirmEnding(str, target) {
  var beginPos = str.length-target.length
  var tempSubStr = str.substring(beginPos,str.length)
  for(var i = 0; i < target.length;i++){
    if(tempSubStr[i] != target[i]){return false}
    else{return true}
  }
}

confirmEnding("Bastian", "n");
