function convertHTML(str) {
  let list = [...str],updatedList = []
  let lenList = list.length
  let x = null, emptyStr = ''
  //Used a switch, if a match in nth
  //position then just push
  //the new format, and reinitialize x to be used again
  for(var j = 0; j < lenList;j++){
    x = list.shift()
    switch(x){
      case '&':
        updatedList.push('&amp;')
        x = ''
        break;
      case '<':
        updatedList.push('&lt;')
         x = ''
        break;
      case '>':
        updatedList.push('&gt;')
         x = ''
        break;
      case '\"':
        updatedList.push('&quot;')
         x = ''
        break;
      case '\'':
        updatedList.push('&apos;')
        x = ''
        break;
      }
      updatedList.push(x)
   }
  // array of ch turned into string
  for(var j = 0; j < updatedList.length;j++){
    emptyStr +=updatedList[j]
  }
  return emptyStr
}

convertHTML("Dolce & Gabbana");
