const exampleArray = [2, 32, 4, 52, 2, 1, 3, 4, 5, 3, 46];
const almostSorted = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10];

const swapIndex = <T>(arr: T[], prevIndex: any, nextIndex: any) => {
  let temp = arr[prevIndex];
  // console.log(`swapping ${arr[nextIndex]} for ${arr[prevIndex]}`)
  arr[prevIndex] = arr[nextIndex];
  arr[nextIndex] = temp;
  //   console.log(`swapped ${} for ${}`)
};

const bubbleSort = <T>(targetArray: T[]) => {
  let noSwaps;
  for (let outerIndex = targetArray.length; outerIndex > 0; outerIndex--) {
    noSwaps = true; 
    for (
      let innerIndex = 0;
      innerIndex <= targetArray.length - 1;
      innerIndex++
    ) {
      let nextValue = innerIndex + 1;
      console.log(targetArray, targetArray[innerIndex], targetArray[nextValue]);
      if (targetArray[innerIndex] > targetArray[innerIndex + 1]) {
        swapIndex(targetArray, innerIndex, nextValue);
        noSwaps = false;
        // console.log(targetArray, targetArray[innerIndex], targetArray[nextValue])
      }
     
    }
    if (noSwaps) break;
  }
  return targetArray;
};

console.log(bubbleSort(almostSorted));
