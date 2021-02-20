//const lengthShort =(string) => string.split(" ").sort((a,b) => b.length - a.length)[0].length;
const lengthShort =(string) => array(string)[0].length;
const array = (string) => string.split(" ").sort((a,b) => a.length - b.length)

console.log(lengthShort("hello to you howareyou"))



//return string.split(" ").map((word, index) => {
  //if((word[index]).length > (word[index+1]).length) return (word[index]).length
 // else return (word[index+1]).length