const isIsogram = (str) => {
  let letters ={}
  //let count = 0;
  str.toLowerCase().split('').forEach(ch =>{ //
    if(!letters[ch]){
      letters[ch] = 1
    }
    else{
      letters[ch]++
    }
  })
  //return Object(letters) //.keys
  Object.keys(letters).find((i) =>{
    if (letters[i] > 1){
      return false
    }
    return true
  })
  
}

console.log(isIsogram( "Dermatoglyphics"))
console.log(isIsogram( "aba"))
console.log(isIsogram( "moOse"))


// const isIsogram = str => {
//   str = str.toLowerCase().split('')
//   let dupArr = [...new Set(str)]
//   return dupArr.join('').length === str.join('').length
// }
// console.log(isIsogram("Dermatoglyphics"))
// console.log(isIsogram("Ddermatoglyphics"))