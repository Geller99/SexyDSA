const binarySearch = <T>(targetArray: Array<T>, value: T) => {
  /**
   *  Grab the minimum and maximum values
   *
   */
  let minimumValue = 0;
  let maximumValue = targetArray.length - 1;
  let guessedValue: any = Math.floor((minimumValue + maximumValue) / 2);

  /**
   *
   *  get a middle value by splitting the array in two
   *  set the current element to be the index of the middle value
   */



};

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(binarySearch(sortedArray, 2)); 
