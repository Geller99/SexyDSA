
const dummyArray = [
    1, 2, 3, 0, 5, NaN, 7, 8, 9, false, 11, 12, undefined, 14, 15, 16, 17, 18, 19, 20, 21,
  ];


// create an array that removes all falsey values 


const compact = (array) => {
    let falsey = [false, null, 0, undefined, NaN]
    
    let result = array.filter(value => !falsey.includes(value))

   return result;
}

console.log(compact(dummyArray))