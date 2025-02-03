// write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
const capitalizeFirst = (arr) => {
  // base case
  if (arr.length === 0) return [];

  // recursive case
  let newArr = [arr[0][0].toUpperCase() + arr[0].slice(1)];
  return newArr.concat(capitalizeFirst(arr.slice(1)));
};

module.exports = {
  capitalizeFirst,
};
