// write recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
const flattens = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

// recursive function
const flatten = (arr) => {
  // base case
  if (arr.length === 0) return [];

  // recursive case
  if (Array.isArray(arr[0])) {
    return flatten(arr[0]).concat(flatten(arr.slice(1)));
  }

  return [arr[0]].concat(flatten(arr.slice(1)));
};

module.exports = {
  flatten,
};
