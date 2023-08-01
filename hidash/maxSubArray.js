const exampleArray = [-2, -3, 4, -1, -2, 1, 5, -1];

const maxSubArraySum = (arr) => {
  let maxEndingAtI = arr[0];
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    console.log("Find the max between", maxEndingAtI, arr[i]);
    maxEndingAtI = Math.max(arr[i], maxEndingAtI + arr[i]);
    console.log("Result before", result, maxEndingAtI);
    result = Math.max(result, maxEndingAtI);
    console.log("Result after", result);
    console.log("max Sum is", maxEndingAtI);
  }
  return result;
};

console.log(maxSubArraySum(exampleArray));
