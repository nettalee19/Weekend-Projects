//const initName = (string) => string.split(' ').map((word) => word[0]).join('.')

const initName = (string) => {
  let first;

  return string.split(' ').map((word) => {
    return word[0]
  }).join('.')
}


console.log(initName("Netta Avidan"))
