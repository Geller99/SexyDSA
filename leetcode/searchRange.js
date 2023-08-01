/**
 *
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 */

/*
    Example 1:
    Input: nums = [5,7,7,8,8,10], target = 8
    Output: [3,4]

*/

const exampleList = [5, 7, 7, 7, 8, 8, 8, 10];

const searchRange = (sortedList, target) => {
  // initialize two pointer
  // find a target in array
  // set both pointers to target
  // move both pointers in either direction to find starting and ending points

  if (!sortedList.length) return;
  if (!target > 0) return;

  let leftPointer;
  let rightPointer;
  let coordinates = [];

  for (let i = 0; i < sortedList.length; i++) {
    if (sortedList[i] === target && sortedList[i - 1] !== target) {
      console.log(`value ${sortedList[i]} at index ${i}  `);
      leftPointer = i;
    }

    if (sortedList[i] === target) {
      console.log(`value ${sortedList[i]} at index ${i}  `);
      rightPointer = i;
    }
  }
  coordinates = [leftPointer, rightPointer];

  return coordinates;
};

console.log("Coordinates are: ", searchRange(exampleList, 7));
