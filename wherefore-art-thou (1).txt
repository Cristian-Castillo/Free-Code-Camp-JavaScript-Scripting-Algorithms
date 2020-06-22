function whatIsInAName(collection, source) {
   var arr = [];
  // Only change code below this line
  var list = []
  var copyCollection = collection
  var copySrc = source

  var srcFirst = copySrc.hasOwnProperty('first')
  var srcLast = copySrc.hasOwnProperty('last')
  var srcItemOne = copySrc.hasOwnProperty('apple')
  var srcItemTwo = copySrc.hasOwnProperty('bat')
  var srcItemThree = copySrc.hasOwnProperty('cookie')

  if(srcLast){
    for(var i = 0; i < copyCollection.length;i++){
      if(copyCollection[i].last == copySrc.last){
        arr.push(copyCollection[i])
      }
    }
  }
  if(srcFirst){
    for(var i = 0; i < copyCollection.length;i++){
      if(copyCollection[i].first == copySrc.first){
        arr.push(copyCollection[i])
      }
    }
  }
  if(srcItemOne){
    for(var i = 0; i < copyCollection.length;i++){
      if(copyCollection[i]['apple'] == srcItemOne){
        arr.push(copyCollection[i])
      }
    }
  }
  if(srcItemTwo){
    for(var i = 0; i < copyCollection.length;i++){
      if(copyCollection[i]['bat'] == srcItemTwo){
        arr.push(copyCollection[i])
      }
    }
  }
  if(srcItemOne && srcItemThree){
    for(var i = 0; i < copyCollection.length;i++){
      if(copyCollection[i]['apple'] && copyCollection[i]['cookie']){
        list.push(copyCollection[i])
      }
    }
    arr = list
  }
  if(srcItemOne && srcItemTwo){
        for(var i = 0; i < copyCollection.length;i++){
      if(copyCollection[i]['apple'] && copyCollection[i]['bat']){
        list.push(copyCollection[i])
      }
    }
    arr = list
  }
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
