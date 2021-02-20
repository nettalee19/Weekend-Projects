
const toCamelCase = (string) => string.split(/[-_]/).map(letter =>  letter.charAt(0).toUpperCase() + letter.slice(1)).join('')



console.log(toCamelCase("the-stealth-warrior")) // returns "theStealthWarrior"
console.log(toCamelCase("hello-user_warrior")) // returns "theStealthWarrior"
//console.log(toCamelCase("The_Stealth_Warrior"))

