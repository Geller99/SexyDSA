const printArr = (arr) => {
  console.log(arr.join(" : "));
};

const printCombinations = (inputArr, buffer, startIndex, bufferIndex) => {
  // base case - if buffer index matches the length of the buffer, it's full - so we print the current stored combination
  if (bufferIndex === buffer.length) {
    printArr(buffer);
    return;
  }

 // this next terminal case checks to see if we have exceeded the length of our input array as we iterate
  if (startIndex === inputArr.length) return;

// find items
  for (let i = startIndex; i < inputArr.length; i++) {
    // place next item into buffer index
    buffer[bufferIndex] = inputArr[i];

    // recurse to next index
    printCombinations(inputArr, buffer, i + 1, bufferIndex + 1);
  }
};


/* 
TODO: Let's break down the recursive logic step-by-step:

The function printCombinations is called with the initial arguments (inputArr, buffer, startIndex, bufferIndex).

It checks the base case: If bufferIndex is equal to the length of the buffer, it means the buffer is full, and a combination is ready to be printed. So, it calls the printArr(buffer) function to print the combination.

After printing the combination, the function returns, and control goes back to the previous recursive call.

The function then checks the terminal case: If startIndex is equal to the length of the inputArr, it means we have already processed all elements in the inputArr, so there's nothing more to do, and it returns without further recursion.

If the terminal case is not met, the function proceeds to enter the loop starting from the current startIndex and iterates over the remaining elements in the inputArr.

It places the current element at index i of inputArr into the buffer at the current bufferIndex.

Then, it recursively calls printCombinations with updated arguments: startIndex becomes i + 1 (to move to the next element in the inputArr), and bufferIndex becomes bufferIndex + 1 (to move to the next position in the buffer).

Steps 2 to 7 repeat for each recursive call until all possible combinations are generated.

So, the return statement after printArr(buffer) only stops the current recursive call, allowing the function to continue executing the other recursive calls and eventually explore all possible combinations.

*/

