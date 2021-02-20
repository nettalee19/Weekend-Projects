
const repeat_str =(string, num) => {
  let newArray = []

  for(let i=0; i<=num; i++){
    newArray[i] = string
  }
  newString = newArray.join('')

  return newString
}

console.log(repeat_str("hello",3))
console.log(repeat_str("i",6))