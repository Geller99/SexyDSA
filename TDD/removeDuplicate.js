



/*

Function that removes duplicate values from a sorted array...

- Sorted array 
- Iterate and check for duplicates
- Slice duplicates

*/

const testArray = [1,1,2,2,2,3,3,3,4,5];

// const removeDuplicates = (array) => {
//     let duplicate = {};
//     let uniqueValues = [];
//     let pointer = 0;

//     for(let i = 0; i < array.length; i++) {
//          let element = array[i];
//          if(duplicate[element] !== 1) {
//                duplicate[element] = 1;
//                uniqueValues[pointer++] = element;
//          }
//     }
//     return uniqueValues;
// }


// console.log(removeDuplicates(testArray));


function removeDuplicates(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        let previousVal = arr[i-1];
        let current = arr[i];

        if(current === previousVal) {
            console.log(current);
            

        }


        

    }
  return arr;

}

console.log(removeDuplicates(testArray));