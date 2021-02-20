const mAp = (array, fn) => {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    answer.push(fn(array[i]));
  }
  return answer;
 };

 const foreAch = (callback) => {
  for (let i = 0; i < this.length; i += 1) {
    callback(this[i], i, this);
  }
}


 const fIlter = (list, fn) => {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (fn(list[i])) {
      result.push(list[i]);
    }
  }
  return result;
 };












// const map = (array, mapFunc) => {
//   for(let i=0; i<array.length; i++)
// }

// console.log([1,2,3,4])

// // map takes an array and function as argumentfunction 
// map(arr, mapFunc) {    
//   const mapArr = []; // empty array        
//   // loop though array    
//   for(let i=0;i<arr.length;i++) {        
//     const result = mapFunc(arr[i], i, arr);        
//     mapArr.push(result);    }    
//     return mapArr;}