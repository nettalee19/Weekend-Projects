const findNextSquare = (num) => {
 
  if((Math.sqrt(num)*10)%10 != 0){
    return `-1`
  }
  else{
   let square = Math.sqrt(num);
   square += 1
   square = Math.pow(square, 2);
   return square
  }
  
}

console.log(findNextSquare(4));
console.log(findNextSquare(5));
console.log(findNextSquare(16));
console.log(findNextSquare(100));
console.log(findNextSquare(121));


//const findNextPow => (num) => (num > 0 && math.sqrt(num)%1 ===0) ? (math.pow(math.sqrt(num) +1),2) :-1