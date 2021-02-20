

const maskify = (cc) =>  "#".repeat(Math.max(0, cc.length-4)) + cc.slice(-4);




console.log(maskify("netta")) //== "##ippy"
console.log(maskify("helloworld")) //== "##ippy"
console.log(maskify("1")) //== "##ippy"
//console.log(maskify("Nananananananananananananananana Batman!")) //=="####################################man!"
