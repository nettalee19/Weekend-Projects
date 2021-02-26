const bus =(array) => {
  let sum = 0;

  for(let i=0; i<array.length; i++){
    for(let j=0; j<= 0; j++){
      sum += array[i][j]
      //console.log(sum)
    }
    for(let j=1; j<= 1; j++){
      sum -= array[i][j]
      //console.log(sum)
    }
  }
  if(sum >= 0){
    return sum
  }
  return "there must be some ghosts getting off the bus"
}



console.log(bus([[3,0],[3,1],[1,1]]))
console.log(bus([[3,0],[3,7],[1,1]]))





// for(let j=0; j<=1; j++){
//   //console.log(array[i][j])
  
//   sum += array[i][0];
//   //sum -= array[i][1] 

// }


//sum += array[i][0];
// sum -= array[i][1] 

// console.log(sum)
