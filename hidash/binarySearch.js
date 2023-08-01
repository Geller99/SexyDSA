const exampleArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 22, 32, 33, 34, 37, 45, 55,
];

const binarySearch = (arr, targetNum) => {
  let startPoint = 0;
  let endPoint = arr.length - 1;

  while (startPoint <= endPoint) {
    let midPoint = Math.floor(startPoint + (endPoint - startPoint) / 2);

    if (arr[midPoint] < targetNum) {
      endPoint = midPoint - 1;
    } else if (arr[midPoint] > targetNum) {
      startPoint = midPoint + 1;
    } else {
      return midPoint;
    }
  }

  return -1;
};

console.log(binarySearch(exampleArray, 10));


/**
 * @dev is writing binary search that searches despite duplicate values and always returns the first occurence of a value...
 * 
 */

const binarySearchDuplicates = (arr, targetNum) => {
    
}