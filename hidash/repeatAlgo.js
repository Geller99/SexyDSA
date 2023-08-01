/*
    The endPointer helps us keep track of the "range" of indexes that captures a target word

    We check every white space and capture the word that occured before it

    We set the endPointer to the next whitespace index to make sure as we loop backwards, a new word can be captured

    "I live in a house" -> set endPointer - string length - 1 to capture where "house" starts... 
                           find whitespace, capture the stirngs between whitespace and the endPointer
                           set the index/value of endPointer = current index of i
                           Now we can capture the next range whenever i runs into a new white space

*/

// const exampleString = "maybe i live in a house";

// const reverseString = (str) => {
//   let endPointer = str.length;
//   let finalString = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     // check for white spaces
//     if (str.charAt(i) === ' ') {
//        console.log(endPointer)
//       // get the range of numbers between i and endpointer
//       // for each of the numbers do str[number]
//       // save to a variable, concat to finalString
//       finalString += str.substring(i, endPointer);
//       console.log(finalString);
//       endPointer = i;
//     } else if (i === 0) {
//        console.log(endPointer)
//       finalString += str.substring(i, endPointer);
//     }
//   }
//   return finalString;
// };

// console.log(reverseString(exampleString));

////////////////////////////////////////////////////////////////////

// const exampleArray = [1,2,3,4,5,6];

// const swapIndex = (arr, prevIndex, nextIndex) => {
//     let temp = arr[prevIndex];
//     arr[prevIndex] = arr[nextIndex];
//     arr[nextIndex] = temp;

// }

// const reverseArray = (arr) => {

//   let endPointer = arr.length - 1;

//   for(let index = 0; index < arr.length; index++) {
//      if(index < endPointer) {
//        swapIndex(arr, index, endPointer);
//        endPointer--;
//      }
//   }

//   return arr;
// }

// console.log(reverseArray(exampleArray));

/*

The goal is to find two values that add up to a target sum

So validSum(exampleArray, 3) should return [2, 1]
find the difference between the targetNumber and the current index
that difference is what we check the hashmap for

As values are pushed into the hashmap, we check if a value exists in the hashmap that sums with the current iteration to equal the target pair 

*/

// const validSum = (arr, targetNum) => {

//   let hashTable = new Map();
//     for(let i = 0; i <= arr.length; i++) {
//         if(hashTable.has(targetNum - arr[i])) {
//           return [targetNum- arr[i], arr[i]];
//         }else {
//           hashTable.set(arr[i], "New");
//         }
//     }

// }

// console.log(validSum(exampleArray, 3));

const exampleArray = [6, 3, 5, 2, 1, 7, -1, -1];

const doubleTheEven = (arr) => {
  let endPointer = arr.length;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      endPointer--;
      arr[endPointer] = arr[i];
      endPointer--;
      arr[endPointer] = arr[i];
    } else if (arr[i] % 2 > 0) {
      endPointer--;
      arr[endPointer] = arr[i];
    }
  }
  return arr;
};

console.log(doubleTheEven(exampleArray));
