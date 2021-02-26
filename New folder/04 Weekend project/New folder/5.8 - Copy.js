


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


const findLongestWord = (str) => {
     
    const splitW = str.split(' ')
    
    const mapping = splitW.map(word => word.length)
    
    const maxiM = Math.max(...mapping)
    
    const result = splitW.filter(word => word.length == maxiM)
    return result
 }
  console.log(findLongestWord("Im going to the party"));








  // const longestWord = (string) =>{
//   return string.split(' ').sort((a,b) => b.length-a.length).filter(word => {
//     Math.max(word.length)
//   })
// }
//const findLongest = words => Math.max(...(words.map(el => el.length)));
//const longestWord =(string) => Math.max(element => array(string)[element].length);
//const longestWord = (string) => string.split(" ").sort()


//console.log(longestWord("hello user tothe"))
//console.log(findLongest("hello tothe user"))


    // return string.split(' ').sort((a,b) => b.length-a.length).filter(word => {
    //   Math.max(word.length)
    // })
    // word = Math.max(word.length)

//  const findLongest = words => words.reduce(
//     function (a, b) {
//         return a.length > b.length ? a : b ;
//     }
// )
//  ;

// console.log(findLongest(['look','on','the','bright','side','of', 'always','life']));