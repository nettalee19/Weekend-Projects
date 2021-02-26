const yearCentury = (year) => {
  let century = Math.floor(year/100) +1

  return (century);
}

//console.log(yearCentury(1))
console.log(`${yearCentury(1999)}th century`)
console.log(`${yearCentury(99)}th century`)