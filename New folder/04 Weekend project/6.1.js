

const accum = (string) => string.split('').map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)).join("-")

//const accum = (string) => string.toUpperCase().split('').reduce((acc, cur, index) => acc + "-" + cur + cur.toLowerCase().repeat(index))
 



console.log(accum("abcd"))
console.log(accum("RqaEzty"))
console.log(accum("cwAt"))

