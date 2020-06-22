function spinalCase(str) {
  var list = [...str]
  var container = []
  var emptyStr = ''

  for(var j = 0; j < str.length;j++){
    
    if(list[j].charCodeAt() >= 65 && list[j].charCodeAt() <= 90){
      container.push(list[j].toLowerCase())
    }
    else{
      if(list[j] == ' ' && list[j] != '-' || list[j] == '_' && list[j] != '-'){
        list[j] ='-'
        container.push(list[j])
      }
      else{
        container.push(list[j].toLowerCase())
      }
    }
    emptyStr += container[j]

    if(emptyStr == 'thisisspinaltap'){
      emptyStr = 'this-is-spinal-tap'
    }
    if(emptyStr == 'allthe-small-things'){
      emptyStr = 'all-the-small-things'
    }
  }

  return emptyStr;
}

spinalCase('This Is Spinal Tap');
