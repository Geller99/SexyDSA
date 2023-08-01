const exampleArray = [5, 7, 8, 1, 2, 4];

const binarySearch = (arr) => {
  let startPoint = 0;
  let endPoint = arr.length - 1;

  while (startPoint <= endPoint) {
    let midPoint = Math.floor(startPoint + (endPoint - startPoint) / 2);
    let right = arr[arr.length - 1];

    if (
      arr[midPoint] <= right &&
      (midPoint == 0 || arr[midPoint - 1] > arr[midPoint])
    ) {
      return midPoint;
    } else if (arr[midPoint > right]) {
      startPoint = midPoint + 1;
    } else {
      endPoint = midPoint - 1;
    }
  }

  return false;
};

console.log(binarySearch(exampleArray, 12));

// const binarySearchMin = (arr) => {

//     for(let i = 0; i <= arr.length; i++) {

//         if (arr[i-1] > arr[i]) {
//             return arr[i];
//         }
//     }
// }

// console.log(binarySearchMin(exampleArray));
