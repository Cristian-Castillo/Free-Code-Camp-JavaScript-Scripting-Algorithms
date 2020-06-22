function chunkArrayInGroups(arr, size) {

  var formula = Math.ceil((arr.length/size))
  var list = []
  var subArray = []
  var num = 0
  var copy = [...arr]

  for(var i = 0; i < formula;i++){
    for(var j = 0; j < size;j++){
      num = copy.shift()
      if(num == undefined){
        break;
      }
      subArray.push(num)
    }
   list.push(subArray)
   console.log(list)
   subArray = []
  }
  return list;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
