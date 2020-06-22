function frankenSplice(arr1, arr2, n) {
  var a1 = arr1.slice()
  var a2 = arr2.slice()
  var a1Len = arr1.length
  var temp = 0;

  while(a1Len > 0){
    temp = a1.pop()
    a2.splice(n,0,temp)
    a1Len--
  }
  console.log(a2)
  return a2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
