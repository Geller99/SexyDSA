let dummyArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];

const chunk = (array, size) => {
  if (size > array.length && size === 0) return [array];
  else if (array.length === 0) return [];

  let sizeNeeded = Math.ceil(array.length / size);
  let a = Array(sizeNeeded);

  let chunks = Array(size);

  if (a[0]) {
    a[0] = array.slice(0, size);
  }
  let falsey = a[0].length;
  let newIndex = falsey + size;
  if (a[1]) {
    a[1] = array.slice(size, newIndex);
  }
  let secondFalsey = a[1].length;
  let secondIndex = secondFalsey + falsey;
  if (a[2]) {
    a[2] = array.slice(secondIndex);
  }

  return a;
};

console.log(chunk(dummyArray, 5));
