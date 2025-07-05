/*
================================
||          Radix Sort        ||
================================
*/
const { getDigit, mostDigits } = require("./radix_helpers");

const radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(radixSort([19, -1, 20, 10, 9, 8, 7]));

module.exports = radixSort;
