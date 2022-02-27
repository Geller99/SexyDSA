

// Problem Solving Patterns 

const testArray = [-4, -3, -2, 0, 2, 1, 8, 5];

// Multiple Pointers
const sumZero = (arr:number[]): Array<number> => {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;


    while (leftPointer < rightPointer) {
        let sumOfReferencedValues = arr[leftPointer] + arr[rightPointer];

        if (sumOfReferencedValues === 0) {
            return [arr[leftPointer], arr[rightPointer]];
        }
        else if (sumOfReferencedValues > 0) {
            // right side value is TOO far positive so decrement
            rightPointer--;
        } else if (sumOfReferencedValues < 0) {
            // left side value is TOO far negative so increment
            leftPointer++;
        } 
    }
    return arr;
}

console.log(sumZero(testArray))

// SLiding Window

// const maximumSumArray = (arr:[], numberOfElements:number) => {
//     let maximumSum = 0;
//     let temporarySum = 0;

//     if(arr.length < numberOfElements) return null;

//     // this grabs the first n values in array
//     for ( let i = 0; i < numberOfElements; i++) {
//         maximumSum += arr[i];
//     }
//     // use temp sum to update max sum as you slide the window
//     temporarySum = maximumSum;

     
//     for( let i = numberOfElements; i < arr.length; i++) {
    
//         // add the next value in array and subtract the previous to "slide" the window
//         temporarySum = temporarySum - arr[i - numberOfElements] + arr[i];

//         // update the max sum if the temp sum is larger than it
//         maximumSum = Math.max(maximumSum, temporarySum);

//     }

//     return maximumSum;
// }