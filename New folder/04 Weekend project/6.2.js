const countingDup =(string) =>{
  let obj ={}
  let count =0;
  string.toLowerCase().split('').forEach( (ch) => {
    if(!obj[ch]){
      obj[ch] = 1
    }
    else{
      obj[ch]++
    } 
   
  })
  //return Object.keys(obj)
  Object.keys(obj).map((i) =>{
    if(obj[i] > 1){
      count++
    }
  })

  return count
}

console.log(countingDup("heLlo"))
console.log(countingDup("abcde"))
console.log(countingDup("aabbcde"))
console.log(countingDup("aabBcde"))
console.log(countingDup("indivisibility"))
console.log(countingDup("Indivisibilities"))
console.log(countingDup("aA11"))
console.log(countingDup("ABBA"))