// const toCamelCase = (string) =>{
//   return string.split(/[-_]/).map(letter => {
//     return letter.charAt(0).toUpperCase() + letter.slice(1)
//   }).join('')

// }
const toCamelCase = (string) => string.split(/[-_]/).map(letter =>  letter.charAt(0).toUpperCase() + letter.slice(1)).join('')



console.log(toCamelCase("the-stealth-warrior")) // returns "theStealthWarrior"
console.log(toCamelCase("hello-user_warrior")) // returns "theStealthWarrior"
//console.log(toCamelCase("The_Stealth_Warrior"))

//return string.split(/[-_]/).map(word => word[0] = word.toUpperCase())//.join('')
//return string.split(/[-_]/).replaceAll(word => word[0], word[0].toUpperCase())//.join('')