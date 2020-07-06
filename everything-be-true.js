function truthCheck(collection, pre) {
  let getList = []
  let flag = false

  switch(pre){
    case 'sex':
      for(var j = 0; j < collection.length;j++){
        if(pre == 'sex'){
          getList.push(collection[j][pre])
        }
        if(getList[j] == 'male' || getList[j] == 'female'){
          flag = true
        }
        else{
          flag = false
          break
        }
      }
    break
    case 'onBoat':
      for(var j = 0; j < collection.length;j++){
        if(pre == 'onBoat'){
          getList.push(collection[j][pre])
        }
        if(getList[j] == true){
          flag = true
        }
        else{
          flag = false
          break
        }
      }
    break
    case 'single':
    for(var j = 0; j < collection.length;j++){
        if(pre == 'single'){
          getList.push(collection[j][pre])
        }
        if(getList[j] == 'yes'){
          flag = true
        }
        else{
          flag = false
          break
        }
      }
  }
  return flag
}


truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
