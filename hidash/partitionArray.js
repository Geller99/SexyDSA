const example = [0, 0, 1, 0, 3, 3, 0];

/**
 *
 *  find the first non-zero value, that's where the boundary begins
 *
 *
 * */

const swap = (arr, prevIndex, nextIndex) => {
  let temp = arr[prevIndex];
  // console.log(`swapping ${arr[nextIndex]} for ${arr[prevIndex]}`)
  arr[prevIndex] = arr[nextIndex];
  arr[nextIndex] = temp;
  //   console.log(`swapped ${} for ${}`)
};


// const partitionArray = (arr) => {
//   let boundary = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       console.log("Swap Coordinates", arr[i], arr[boundary]);
//       swap(arr, i, boundary);
//       boundary++;
//     }
//   }
//   return arr;
// };

let secondaryExample = [1, 4, 5, 4, 4, 6, 2, 3];

const threeWayPartition = (arr, pivot) => {

    let lowerBoundary = 0;
    let upperBoundary = arr.length - 1;

    for (let i = 0; i <= upperBoundary; i++) {
        if( arr[i] < pivot ) {
            swap(arr, i, lowerBoundary);
            lowerBoundary++;
        } else if (arr[i] > pivot) {
            swap(arr, i, upperBoundary);
            upperBoundary--;
        }
    }

    return arr;

}

console.log(threeWayPartition(secondaryExample, 4));
