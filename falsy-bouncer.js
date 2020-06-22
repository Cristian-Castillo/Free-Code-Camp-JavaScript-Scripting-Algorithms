function bouncer(arr) {

  for(var k = 0; k < arr.length;k++){
    if(arr[k] == false){
      arr.splice(k,1)
    }
    else if(arr[k] == 0){
      arr.splice(k,1)
    }
   
    if(arr[k] == false){
      arr.splice(k,1)
    }
    if(arr[k] == null){
      arr.splice(k,1)
    }
    if(arr[k] == 0){
      arr.splice(k,1)
    }
    if(!arr[k] === !NaN){
      arr.splice(k,1)
    }
    if(arr[k] == undefined){
      arr.splice(k,1)
    }
    if(arr[k] == " " || arr[k] == ''){
      arr.splice(k,1)
    }
  }
  console.log(arr)
  return arr;
}

bouncer([7, "ate", "", false, 9]);
