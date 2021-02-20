// const sum = (num) => {
//   let numArray = [];
//   let sum =0; 

//   for(let i=num; i>=0; i--){
//     numArray[i] = i;
//   }

//   for(let j=0; j<numArray.length; j++){
//     sum += numArray[j]
//   }

//   return sum;
// }


const sumSum = (num) => {
  let sum =0; 

  for(let i=0; i<=num; i++){
    sum += i
  }
  return sum;
}


console.log(sumSum(5));
console.log(sumSum(8));