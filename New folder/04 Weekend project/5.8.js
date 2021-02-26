
const findLongestWord = (str) => str.split(' ').filter(word => word.length == Math.max(...str.split(' ').map(word => word.length)))
 
console.log(findLongestWord("Im going to the party"));


















  // function findLongestWord(str) {
//     //split string into array
//     const splStrArray = str.split(" ");
  
//     //find the length of each item in the string
//     const lengthofStringArray = splStrArray.map(item => item.length);
  
//     //find the max length
//     const maxLengthinArr = Math.max(...lengthofStringArray);
  
//     //match the word with the length
//     const result = splStrArray.filter(item => item.length === maxLengthinArr);
//     return result;
//   }
//   console.log(findLongestWord("Im going to the party"));