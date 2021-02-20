// const lastFirstRemove = (string) => {
 
//   let stringArray = string.split('');
  
//   stringArray.map(ch => {
//     stringArray.split(ch).pop(ch)
//   })

//   return output
// }

// console.log(lastFirstRemove("netta"))
// console.log(lastFirstRemove("HeLlo"))




const lastFirstRemove = (string) => {
  let output = []
  output = string.split('');
  output.pop()
  output.shift()

  return output
}

console.log(lastFirstRemove("netta"))
console.log(lastFirstRemove("HeLlo"))