function checkCashRegister(price, cash, cid) {

  let currentChange = cash-price, copyChange = null
  let tempNum = null,stringNum = null, accumulator = 0, zeroCounter = 0
  let statusArray = [['INSUFFICIENT_FUNDS'],['OPEN'],['CLOSED']]
  let change = [],subArr = []
  let quarter = .25,dime = .10, penny = .01, nickel = .05
  let dollar = 1.00, twenty = 20.00, oneHundred = 100.00
  
  for(var i = (cid.length-1);i > -1;i--){
    currentChange = (Math.round(currentChange * 100) / 100)
    for(var j = (cid[i].length-1); j > 0;j--){
      tempNum = cid[i][1] 
      stringNum = cid[i][0] 
      /* Begin Quarter */
      if(currentChange == .50){
        
        let num = null,key = '',pos = null

        for(var j = 0; j < cid.length;j++){
          for(var k = 0; k< cid[j].length;k++){
            if(cid[j][k] == 'QUARTER'){
                key = cid[j][0]
                num = cid[j][1]
                pos = j
              }
              if(cid[j][1] == 0){
                console.log(cid[j][0])
                console.log(cid[j][1])
                zeroCounter++
              }
           }
        }
        switch(key){
          case 'QUARTER':
          let quarter = .25
          
          if(key == 'QUARTER' && num <= 0){
            return {status:statusArray[0][0],change}
          }
          if(num > 0){

              accumulator = .25
              while(accumulator <= currentChange){
                cid[pos][1] -= quarter
                accumulator += quarter
                
                if(cid[pos][1] == 0){
                  cid[pos][1] = 0
                  break
                }
                if(cid[pos][1] < 0){
                  return {status:statusArray[0][0],change}
                }
              }

              subArr.push(key,accumulator-quarter)
              change.push(subArr)
              currentChange -= accumulator
              currentChange += quarter
              currentChange = (Math.round(currentChange * 100) / 100)
              accumulator = 0
              subArr = []
              return {status:'OPEN',change}
            }   
          }
        }
        if(currentChange != .50 && currentChange < oneHundred){
          let num = cid[i-1][1]
          let key = cid[i-1][0]
          let pos = i-1
          
          switch(key){
            case 'TWENTY':
            let twenty = 20
            
            if(num >= 60){
              
              while(accumulator < currentChange){
                cid[pos][1] -= twenty
                accumulator += twenty
                
                if(cid[pos][1] == 0){
                    cid[pos][1] = 0
                    break
                }
              }
              
                subArr.push(key,accumulator)
                change.push(subArr)
                currentChange -= accumulator
                currentChange = (Math.round(currentChange * 100) / 100)
                accumulator = 0
                subArr = []
              }
              break
            case 'TEN':
              let ten = 10

              if(num > 0){
              while(accumulator < currentChange){
                cid[pos][1] -= ten
                accumulator += ten

                if(cid[pos][1] == 0){
                  cid[pos][1] = 0
                  break
                }
              }
              
                subArr.push(key,accumulator)
                change.push(subArr)
                currentChange -= accumulator
                currentChange = (Math.round(currentChange * 100) / 100)
                accumulator = 0
                subArr = []
              }
              break
            case 'FIVE':
              let five = 5
              
              if(num > 0){
                accumulator = 5
                
                while(accumulator < currentChange){
                  cid[pos][1] -= five
                  accumulator += five
                  
                  if(cid[pos][1] == 0){
                    cid[pos][1] = 0
                    break
                  }
                }
             
                subArr.push(key,accumulator-5)
                change.push(subArr)
                currentChange -= (accumulator)
                currentChange += five
                currentChange = (Math.round(currentChange * 100) / 100)
                accumulator = 0
                subArr = []
              }
              break
                case 'ONE':
                let one = 1
                
                if(num > 0){
                
                accumulator = 1
                while(accumulator < currentChange){
                  cid[pos][1] -= one
                  accumulator += one
                  
                  if(cid[pos][1] == 0){
                    cid[pos][1] = 0
                    break
                  }
                }
               
                subArr.push(key,accumulator-1)
                change.push(subArr)
                currentChange -= accumulator
                currentChange += one
                currentChange = (Math.round(currentChange * 100) / 100)
                accumulator = 0
                subArr = []
              }
              break
                case 'QUARTER':
                let quarter = .25
                
                if(num > 0){
              
                accumulator = .25
                while(accumulator < currentChange){
                  cid[pos][1] -= quarter
                  accumulator += quarter
                  
                  if(cid[pos][1] == 0){
                    cid[pos][1] = 0
                    break
                  }
                }
             
                subArr.push(key,accumulator-quarter)
                change.push(subArr)
                currentChange -= accumulator
                currentChange += quarter
                currentChange = (Math.round(currentChange * 100) / 100)
                accumulator = 0
                subArr = []
              }
              break
                case 'DIME':
                let dime = .10
                
                if(num > 0){
            
                accumulator = .10
                while(accumulator < currentChange){
                  cid[pos][1] -= dime
                  accumulator += dime
                  
                  if(cid[pos][1] == 0){
                    cid[pos][1] = 0
                    break
                  }
                }

                let temp = (Math.round((accumulator-dime)*100)/100)
                subArr.push(key,temp)
                change.push(subArr)
                currentChange -= accumulator
                currentChange += dime
                currentChange = (Math.round(currentChange * 100) / 100)
                accumulator = 0
                subArr = []
              }
              break
                case 'PENNY':
                let penny = .01
                
                if(num > 0){
                
                accumulator = .01
                while(accumulator < currentChange){
                  cid[pos][1] -= penny
                  accumulator += penny
                  
                  if(cid[pos][1] == 0){
                    cid[pos][1] = 0
                    break
                  }
                }
                
                let temp = (Math.round((accumulator)*100)/100)
                subArr.push(key,temp)
                change.push(subArr)
                currentChange -= accumulator
                currentChange = (Math.round(currentChange * 100) / 100)
                accumulator = 0
                subArr = []
                return {status:'OPEN',change}
              }
              break
            }
          }
      else{
        return {status: "INSUFFICIENT_FUNDS", change: []}
      }
    }
  }
}