//[8,4,2,1]

const oneZero =(array) =>{
  let sum =0;

  for(let i=array.length; i>=0; i--){
    if (array[i] == 1){
      sum += (2**(array.length-i-1))
    }
  }
  return sum;
}


console.log(oneZero([0,0,0,1]))
console.log(oneZero([0,0,1,0]))
console.log(oneZero([0,0,1,1]))
console.log(oneZero([0,1,0,1]))
console.log(oneZero([1,0,0,1]))
console.log(oneZero([1,0,0,1,1]))


// const binaryToDecimal = (arr) => {
//   return arr.reduce((acc,digit,index) => digit ? acc+(2**(arr.length-index-1)): acc,  0);
// }
