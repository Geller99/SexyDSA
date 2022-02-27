const initialArray = [2, 5, 5, 7, 12];

// const twoSum = (arr, target) => {
//   // need to iterate over the array and find two values that combine to equal the target value

//   /*
//         Options,
//         - Iterate and compare each value to the previous value?
//         - Iterate from start and from end and compare all values?
//     */

// //   if (!Array.isArray(arr)) return "invalid input";
// //   if (arr.length < 0) return "invalid array";
// //   if (!target || typeof target !== 'number') return "please input valid conditions";

//     let surfaceArray = [...arr];

//     for (let i = 0; i < arr.length; i++) {
//         console.log("Iterating...")
//         console.log(arr[i])

//     }

// };

// console.log(twoSum(initialArray))

function twoNumberSum(array, targetSum) {
  let numbersObject = {};
  for (const number of array) {
    let numberWeAreChecking = targetSum - number;
    if (numberWeAreChecking in numbersObject) {
      return [numberWeAreChecking, number];
    } else {
      numbersObject[number] = true;
    }
  }
  return [];
}

console.log(twoNumberSum(initialArray, 9));
