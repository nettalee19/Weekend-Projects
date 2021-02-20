p0 = 1000
p = 1200

const GrowthOfPop =(p0, percent, aug, p) => {
  let year =0;
  
  while(p0 <p){
    p0 = p0 + p0*(percent/100) + aug;

    year++;
  }

  return year
}

console.log(GrowthOfPop(1000,2,50,1200))
console.log(GrowthOfPop(1500,5,100,5000))
console.log(GrowthOfPop(1500000,2.5,10000,2000000))



