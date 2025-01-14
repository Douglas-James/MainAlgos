// Average pair solution
const averagePair = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  // loop through the array
  while (start < end) {
    // calculate the average of the values at the start and end pointers
    let average = (arr[start] + arr[end]) / 2;

    // if the average is the same as the target, return true
    // if the average is less than the target, increment the start pointer
    // if the average is greater than the target, decrement the end pointer
    if (average === target) return true;
    if (average < target) start++;
    if (average > target) end--;
  }

  // if the condition is not met, return false
  return false;
};

module.exports = {
  averagePair,
};
