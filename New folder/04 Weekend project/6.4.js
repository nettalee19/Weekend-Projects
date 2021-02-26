const isIsogram = (str) => {
  let letters ={}

  str.toLowerCase().split('').forEach(ch =>{ 
    !letters[ch] ? letters[ch] = 1 : letters[ch]++;
      
  })
  
  return letters[Object.keys(letters).find((i) => letters[i] > 1)] > 1 ? false : true
  
}
console.log(isIsogram( "Dermatoglyphics"))
console.log(isIsogram( "aba"))
console.log(isIsogram( "moOse"))

