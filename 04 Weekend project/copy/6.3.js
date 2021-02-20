// const longest = (array1, array2) => {
//   let array = array1.concat(array2); //joinning the two strings togather to one strings
  
//   let x = {}; 
//   array.split('').forEach((i) => { //the string to array of letters
//     if(!x[i]) { //if the letter of the current index is not in the object
//       x[i] = true //adding it
//     }
//   })
//   return Object.keys(x).sort().join('') //returning the object keys (letters) and then sorting then and back to a string
// };


// console.log(longest( "xyaabbbccccdefww", "xxxxyyyyabklmopq"))

// return str.split('').sort().join('');

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