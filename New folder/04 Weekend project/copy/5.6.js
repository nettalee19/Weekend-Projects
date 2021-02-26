// const maskify = (string) => {
//   //let newArray =[]
//   //return string.split('').replace(0, string.length-4, "#") + 
//   return string.split('').map(letter => {
//     letter.replace(0, string.length-4, "#")
//   }).slice(-4).join('')
  
  

// }

const maskify = (cc) =>  "#".repeat(Math.max(0, cc.length-4)) + cc.slice(-4);

// function maskify(str) {
//   const transformDigits = str.slice(0, -4);
//   const nonTransformDigits = str.slice(-4);
//   const transformArray = transformDigits.split('').map(function(letter) {
//     return letter = "#"
//   });
  
//   const transformArray = transformArray.join('');
//   return transformArray.concat(nonTransformDigits);
// }


console.log(maskify("netta")) //== "##ippy"
console.log(maskify("helloworld")) //== "##ippy"
console.log(maskify("1")) //== "##ippy"
//console.log(maskify("Nananananananananananananananana Batman!")) //=="####################################man!"
