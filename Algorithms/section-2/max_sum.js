/*
write a function maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
* This is a sliding window pattern
*/

// Time complexity: O(n)
const maxSubarraySum = (nums, target) => {
  // check if the target is greater than the length of the num array
  if (target > nums.length) return null;
  let maxSum = 0;
  let tempSum = 0;
  // calculate the sum of the first target elements
  for (let i = 0; i < target; i++) {
    // calculate the sum
    maxSum += nums[i];
  }
  // set the tempSum to maxSum
  tempSum = maxSum;
  // loop through the numsay
  for (let i = target; i < nums.length; i++) {
    // calculate the tempSum
    tempSum = tempSum - nums[i - target] + nums[i];
    // set the maxSum
    maxSum = Math.max(maxSum, tempSum);
  }
  // return the maxSum
  return maxSum;
};

// sliding window pattern
function minSubArrayLen(nums, target) {
  // total keeps track of the sum of the current window
  // start keeps track of the start of the window
  // end keeps track of the end of the window
  // minLen keeps track of the minimum length of the window
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to the right
    if (total < target && end < nums.length) {
      total += nums[end];
      // increment
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= target) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than target but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  // return 0 if no valid subarray found
  return minLen === Infinity ? 0 : minLen;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // Output: 10 (8 + 2)
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // Output: 17 (5 + 2 + 8 + 2)
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // Output: 6
console.log(maxSubarraySum([], 4)); // Output: null
module.exports = {
  maxSubarraySum,
  minSubArrayLen,
};
