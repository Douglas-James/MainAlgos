// write a function called productOfArray which takes in an array of numbers and returns the product of them all.
function productOfArray(arr) {
  // base case
  if (arr.length === 0) return 1;

  // recursive case
  return arr[0] * productOfArray(arr.slice(1));
}

// another way to solve the problem
const productOfArray_1 = (arr) => {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray_1(arr.slice(1));
};

module.exports = {
  productOfArray,
};
