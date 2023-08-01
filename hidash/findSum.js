const example = [6, 3, 5, 2, 1, 7];

const findSum = (arr, targetValue) => {
  if (!arr.length) return null;
  if (typeof(targetValue) !== 'number') return "error! expected value should be of type number";
  
  let store = new Map();

  // check if the map contains a value which = targetValue - arr[i]
  for (let i = 0; i < arr.length; i++) {
    /* does it have 4 - 6? add 6
       does it have 4 - 3? add 3
       does it have 4 - 5? add 5
       does it have 4 - 2? add 2
       does it have 4 - 1? Yeah, it has 3... meaning it found two values that makeup 4
    */
    if (store.has(targetValue - arr[i])) {
      return [targetValue - arr[i], arr[i]];
    }
    else {
      store.set(arr[i], "reads");
    }
  }
  return null;
};

console.log(findSum(example, 4));
