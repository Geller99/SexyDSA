/*
    Objective is to search through each individual element 
    Until you find the element of the target criteria

    Big O complexity - O(n) and can be very expensive!
    Used with unsorted data structures

*/

const linearSearch = <T>(targetArray: T[], value: T) => {
  for (let index = 0; index <= targetArray.length; index++) {
    let currentElement = targetArray[index];

    if (currentElement === value) {
      return index;
    }
  }
  return -1;
};

const arrayVal = [
  2, 3, 5, 2, 45, 6, 74, 5, 4, 3, 5, 78, 8, 9, 5, 6, 7, 88, 54, 56,
];

console.log(linearSearch(arrayVal, 74));
