/*
    iterate from the end of the array to the beginning

    Use two pointers to keep track of values and compare

    One pointer iterates the array in reverse, the second one keeps track of the end of the array




*/

// const exampleArray = [1, 2, 5, 6, 8, -1, -1, -1];

// const reverseTraversal = (arr) => {
//   let endPointer = arr.length;

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 === 0) {
//       endPointer--;
//       arr[endPointer] = arr[i];
//       endPointer--;
//       arr[endPointer] = arr[i];
//       console.log(arr[i], "is an even number", arr);
//     } else if (arr[i] % 2 > 0) {
//       endPointer--;
//       arr[endPointer] = arr[i];
//       console.log(arr[i], "is an odd number");
//     } else {
//       console.log(arr[i], "is undefined");
//     }
//   }

//   return arr;
// };

// console.log(reverseTraversal(exampleArray));

let exampleArray = [-4, -2, -1, 0, 3, 5];

const squareArray = (arr) => {
  let endPointer = arr.length;
  let startPointer = 0;
  let relayArray = [];

  while (startPointer < endPointer) {
    if (Math.abs(arr[startPointer]) > Math.abs(arr[endPointer])) {
      relayArray.unshift(Math.pow(arr[startPointer], 2));
      startPointer++;
    } else {
      relayArray.unshift(Math.pow(arr[endPointer], 2));
      endPointer--;
    }
  }

  return relayArray;
};

console.log(squareArray(exampleArray));
