const removeFromArray = (arr, ...args) => {
  let removeValFromIndex = [...args];

  // map over the array of provided arguments to capture indexes
  removeValFromIndex.map((item) => {
    // capture the index of each item in the [...args] array
    let itemIndex = arr.indexOf(item);
    // console.log(itemIndex);

    // IF the item in [...args] does not exist on the original array, return original array
    if (arr.indexOf(item) === -1) {
      return arr;
    }

    // else, if the index of items in [...args] is NOT null, remove them from the original array using splice
    else if (arr.indexOf(item) !== null) {
      arr.splice(itemIndex, 1);
    }
  });

  return arr;
};

module.exports = {
  removeFromArray,
};

console.log(removeFromArray(["Hi", 2, 3, 4, "hey"], 3));
