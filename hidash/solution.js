/*
    TODO: Write a function called solution that takes in a function.  

    The function will be called with increasing indexes 
    (starting from 0) until the input function returns false

*/

/* 
    solution((e) => {
   this function will be run 7 times with e: 0,1,2,3,4,5,6
    return e < 6
*/
const solution = (func) => {
  let increasingIndex = 0;
  if (typeof func === "function") {
    if (func(increasingIndex) === 5) return false;
    else if(func(increasingIndex) === 0) {
      increasingIndex++;
      console.log(increasingIndex);
      return solution(func(increasingIndex));
    }
  }
};

console.log(
  solution((e) => {

    return e < 6
  })
);
