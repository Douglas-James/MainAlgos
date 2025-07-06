/*
=======================================
||          Radix helper             ||
=======================================
There are a few helper functions that are used in the radixSort function.
1. getDigit: Gets the digit at the given position of the given number.
2. digitCount: Gets the number of digits in a number.
3. mostDigits: Gets the number of digits in the largest number in an array.
*/

//
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

module.exports = {
  getDigit,
  mostDigits,
};
