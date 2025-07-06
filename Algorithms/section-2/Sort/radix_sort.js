/*
================================
||          Radix Sort        ||
================================
we need getDigit and mostDigits function
from radix_helpers.js file 
radixSort function will be:
1. find the max number of digits in the array
2. loop from k = 0 to maxDigitCount
3. create 10 empty buckets
4. loop through the array
5. get the digit at kth place
6. put the number in the bucket
7. loop through the buckets
8. concat the buckets to the array
9. return the array
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
