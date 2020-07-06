var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let nameArr = [],tempStr = '',indexPt = null

/* Breaking Bob Ross down into sub arrays */
  for(var j = 0; j < firstAndLast.length;j++){
   if(firstAndLast[j] != ' '){
        tempStr +=  firstAndLast[j]
   }
   if(firstAndLast[j] == ' '){
        nameArr.push(tempStr)
        indexPt = j
        tempStr = ''
    }
  }
  for(var j = indexPt; j < firstAndLast.length;j++){
    if(firstAndLast[indexPt] == ' '){
      break
    }
    tempStr += firstAndLast[indexPt]
  }
  nameArr.push(tempStr)
 
  this.getFullName = function() {
    firstAndLast = nameArr[0]+(' ')+nameArr[1]
    return firstAndLast;
  };
  this.getFirstName = function(){
    return nameArr[0]
  }
  this.getLastName = function(){
    return nameArr[1]
  }
  this.setFirstName = function(first){
    nameArr[0] = first
  }
  this.setLastName = function(last){
    nameArr[1] = last
  }
  this.setFullName = function(firstAndLast){
    let tempList = []
    tempStr = ''
/* Breaking nth string down into sub arrays */
    for(var j = 0; j < firstAndLast.length;j++){
    if(firstAndLast[j] != ' '){
          tempStr +=  firstAndLast[j]
    }
    if(firstAndLast[j] == ' '){
          tempList.push(tempStr)
          indexPt = j
          tempStr = ''
      }
    }
    for(var j = indexPt; j < firstAndLast.length;j++){
      if(firstAndLast[indexPt] == ' '){
        break
      }
      tempStr += firstAndLast[indexPt]
    }
    tempList.push(tempStr)
    nameArr[0] = tempList[0]
    nameArr[1] = tempList[1]
  }
};



var bob = new Person('Bob Ross');
bob.getFullName();
