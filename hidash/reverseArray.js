const exampleArray = [1, 2, 3, 4, 5, 6];

/*
    To reverse this array in place,

    We need to track the end of the array with one pointer and iterate through with another
    Meaning, as we iterate with one pointer, we swap it with the value of the endPointer, and decrement the endPointer to track the next value



*/

const swapIndex = (arr, indexOne, indexTwo) => {
  let temp = arr[indexOne];

  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temp;
};

const reverseArray = (arr) => {
  let startPointer = 0;
  let endPointer = arr.length - 1;

  while (startPointer < endPointer) {
    swapIndex(arr, startPointer, endPointer);
    startPointer++;
    endPointer--;
  }

  return arr;
};

console.log(reverseArray(exampleArray));
