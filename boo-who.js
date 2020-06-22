function booWho(bool) {
  var flag = bool

  if(flag === 1 || flag === -1) return false
  else if(flag === true) return bool;
  else if(flag === false) return !bool;
  else return false

}

booWho(null);
