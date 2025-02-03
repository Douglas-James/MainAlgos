/*
  Write a recursive function called collectOddValues which accepts an array and returns a new array with only the odd values.
*/
function collectOddValues(arr) {
  // create a new array to store the odd values
  let result = [];

  // Base case
  function helper(helperInput) {
    // Base case
    if (helperInput.length === 0) {
      return;
    }

    // check if the first element is odd
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    // recursive case to check the rest of the array elements  [1, 2, 3, 4, 5] => [2, 3, 4, 5] => [3, 4, 5] => [4, 5] => [5] => []
    helper(helperInput.slice(1));
  }

  // call the helper function
  helper(arr);

  // return the result
  return result;
}

// recursive way to solve the problem
const collectOddValues_1 = (arr) => {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  // recursive case to check the rest of the array elements  [1, 2, 3, 4, 5] => [2, 3, 4, 5] => [3, 4, 5] => [4, 5] => [5] => []
  newArr = newArr.concat(collectOddValues_1(arr.slice(1)));

  // return the new array
  return newArr;
};

// write a recursive function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.
function pow(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * pow(base, exp - 1);
}

module.exports = {
  collectOddValues,
  collectOddValues_1,
  pow,
};
