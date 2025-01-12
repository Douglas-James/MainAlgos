/*
write a function maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
* This is a sliding window pattern
*/

// Time complexity: O(n)
const maxSubarraySum = (nums, target) => {
  // if the target is lease than the length of the nums return null
  if (target > nums.length) {
    return null;
  }

  // set the maxSum to 0
  let maxSum = 0;
  // set the tempSum to 0
  let tempSum = 0;
  // loop through the numsay
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

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([0, 1, 2], 0)); // 3

module.exports = {
  maxSubarraySum,
};
