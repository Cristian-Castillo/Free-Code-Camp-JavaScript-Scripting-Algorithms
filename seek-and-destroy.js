function destroyer(arr) {
  var list = []
  var a1 = [...arguments[0]]
  var argLen = arguments.length
  var count = 0, getNum = 0

  while(count < argLen){
    getNum = arguments[count+1]
    for(var i = 0; i < a1.length;i++){
      if(getNum == a1[i]){
        list.push(i)
      }}
    count++}
  count = 0
  var newArr = []
  var listLength = list.length
  console.log(list)
  while(count < listLength){
    getNum = list.pop()
    a1[getNum] = ' '
    count++
  }
  var arr = []
  for(var i = 0; i <a1.length;i++){
    if(a1[i] != ' '){
      arr.push(a1[i])
    }
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
