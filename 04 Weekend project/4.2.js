const fibo = (array,num) => {
  //let sum = 0; 
  //let n0 = 0 , n1= 1, next;

  console.log(array[0] )
  console.log(array[1] )
  
  for(let i=0; i < num; i++){
    console.log(array[2]);
    let next = array[0] + array[1]+array[2];
    array[0] = array[1];
    array[1] = array[2];
    array[2] = next;
  }
}

(fibo([1,1,1],6))