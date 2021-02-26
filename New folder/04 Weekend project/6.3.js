

const longest = (array1, array2) => {
  let array = array1.concat(array2);

  let letters = {};
  array.split('').forEach( (element) => {
    if(!letters[element]){
      letters[element] = true
    }
    
  })
  return Object.keys(letters).sort().join('')
}

console.log(longest( "xyaabbbccccdefww", "xxxxyyyyabklmopq"))