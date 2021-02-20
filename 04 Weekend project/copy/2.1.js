const twoMin =(array) => {
  let i;
  if(array.length >= 4  && !array.includes(array[i] <= 0 )){
    array.sort(function(a, b){return a-b});

    let sumMin = array[0] + array[1]
    return(sumMin)
  }
  else{
    return "Not a valid array"
  }
  
  
}

console.log(twoMin([19, 5, 42, 2, 77])) ;
console.log(twoMin([0, -5, -42, 2, 177])) ;
console.log(twoMin([1000, 100, 100000, 1])) ;
console.log(twoMin([1000, 100, 100000])) ;




// const twoMin =(array) => {
//   let min1=array[0];
  

//   for(let i=0; i<array.length-1; i++){
//     if(array[i] < min1){
//       min1 = array[i];
        
//     }
     
//   }
//   let slice1 = array.slice(i,i+1);
//   return(array, slice1)
  
// }