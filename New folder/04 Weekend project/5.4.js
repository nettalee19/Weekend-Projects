const toWeirdCase =(string) => {

  return string.split('').map((ch,index )=>{
    if(index%2 !== 0 ) return ch.toLowerCase()
    else return ch.toUpperCase()
  }).join('')
}


console.log(toWeirdCase( "String" ));
console.log(toWeirdCase( "Weird string case" ));