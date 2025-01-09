function collectOddValues (arr){
  // create a new array to store the odd values
  let result = [];

  // Base case
  if (arr.length === 0) return result;

  // check if the first element is odd
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  // recursive case to check the rest of the array
  result = result.concat(collectOddValues(arr.slice(1)));
  return result;
}

// test the function
module.exports = {
  collectOddValues
};
