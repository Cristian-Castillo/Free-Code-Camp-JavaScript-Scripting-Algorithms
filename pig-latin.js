function translatePigLatin(str) {
  var list = [...str]
  var tempStr = ''
  var tempStrTwo = ''
  var indexPosA = 0
  var indexPosE = 0
  var indexPosI = 0
  var indexPosO = 0
  var indexPosU = 0
  
  if(list[0] == 'a' || list[0] == 'e' || list[0] == 'i' || list[0] == 'o' || list[0] == 'u'){
    list.push('w')
    list.push('a')
    list.push('y')

    for(var j = 0; j < list.length;j++){
      tempStrTwo += list[j]
    }
    return tempStrTwo
  }
  if(list[0] != 'a' || list[0] != 'e' || list[0] != 'i' || list[0] != 'o' || list[0] != 'u'){
      
    indexPosA = list.indexOf('a')
    indexPosE = list.indexOf('e')
    indexPosI = list.indexOf('i')
    indexPosO = list.indexOf('o')
    indexPosU = list.indexOf('u')     
      
      if(indexPosA == - 1 && indexPosE == -1 && indexPosI == -1 && indexPosO == -1 && indexPosU == -1){
        list.push('a')
        list.push('y')
        
        for(var i = 0; i < list.length;i++){
          tempStr += list[i]
        }
        return tempStr
      }
      else{
        var listLen =list.length
        var vowelContainer = []
        for(var i = 0; i < listLen;i++){
          if(list[i] == 'a' || list[i] == 'e' || list[i] == 'o' || list[i] == 'u' || list[i] == 'e'){
            vowelContainer.push(i)
          }
        }
        var getFirstVowelPos = vowelContainer.shift()
        var count = 0
        var toEnd = 0
        while(count < getFirstVowelPos){
          toEnd = list.shift()
          list.push(toEnd)
          count++
        }
        list.push('a')
        list.push('y')
        for(var i = 0; i < list.length;i++){
          tempStr += list[i]
        }
        return tempStr
      }
    }
 }   

translatePigLatin("consonant");
