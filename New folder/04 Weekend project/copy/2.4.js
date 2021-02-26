const findUniq = (array) => {
  for(let i=0; i<array.length; i++){
    if (array[i] !== array[i-1] && array[i] !== array[i+1]){
      return array[i];
    }
  }
  return uniq;
}



console.log(findUniq([1,1,1,5,1,1]))