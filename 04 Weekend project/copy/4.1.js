//0 1 1 2 3 5 8 13
const fibo = (num) => {
  //let sum = 0; 
  let n0 = 0 , n1= 1, next;

  for(let i=0; i < num; i++){
    console.log(n1);
    next = n0 + n1;
    n0 = n1;
    n1 = next;
  }
}

(fibo(5))


 // while(n <= num){
  //   console.log(n1);
  //   next = n0 + n1;
  //   n0 = n1;
  //   n1 = next;
  //   n++
  // }