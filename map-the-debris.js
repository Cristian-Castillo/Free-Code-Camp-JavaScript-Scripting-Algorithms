function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let copyArr = [...arr]

  arr.forEach((elementItem) => {
     let newTemperature = Math.round(
        Math.sqrt(Math.pow(elementItem.avgAlt+earthRadius,3)/GM) * Math.PI * 2
    )
    //delete and add property altitude
    delete elementItem.avgAlt;
    elementItem.orbitalPeriod = newTemperature;
  })
  return copyArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
