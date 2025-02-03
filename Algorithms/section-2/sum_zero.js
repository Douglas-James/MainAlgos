/*
Question: Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exist.
*/

// Naive sum zero function
// Time complexity: O(n^2) - Quadratic time complexity
const sumZero_1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

// Refactored sum zero function
// Time complexity: O(n) - Linear time complexity
const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
// sumRange(3) = 3 + sumRange(2) = 3 + 2 + sumRange(1) = 3 + 2 + 1 = 6
// sumRange(4) = 4 + sumRange(3) = 4 + 3 + sumRange(2) = 4 + 3 + 2 + sumRange(1) = 4 + 3 + 2 + 1 = 10

// Test cases
console.log(sumRange(3)); // 6

module.exports = {
  sumZero,
};
