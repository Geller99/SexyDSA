const exampleArray = [2, 7, 3, 5, 5, 4];

// This method works only with Sorted Arrays
// const findTwoSum = (arr, targetNumber) => {
//   if (!arr) return undefined;
//   if (typeof targetNumber !== "number") return "invalid input";

//   let startPointer = 0;
//   let endPointer = arr.length - 1;

//   // console.log([index, endPointer]);

//   while (startPointer < endPointer) {
//     let sum = arr[startPointer] + arr[endPointer];
//     if (sum < targetNumber) {
//       startPointer++;
//     } else if (sum > targetNumber) {
//       endPointer--;
//     } else if (sum === targetNumber) {
//       return [arr[startPointer], arr[endPointer]];
//     }
//   }
// };

const findTwoSum = (arr, targetNumber) => {
  if (!arr) return undefined;
  if (typeof targetNumber !== "number") return "invalid input";

  let valueStore = new Map();
  let searchedValue;

  for (let i = 0; i <= arr.length; i++) {
    searchedValue = targetNumber - arr[i];
    if (valueStore.has(searchedValue)) {
      return [arr[i], searchedValue];
    } else {
      valueStore.set("sum", arr[i]);
    }
  }
};
console.log(findTwoSum(exampleArray, 9));
