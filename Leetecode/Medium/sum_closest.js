// 3 Sum closest
// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
// Time complexity: O(n^2)
const threeSumClosest = (nums, target) => {
  // sort the array
  nums.sort((a, b) => a - b); // time complexity O(nlogn)
  // set the closest to infinity
  let closest = Infinity;
  // loop through the array
  for (let i = 0; i < nums.length - 2; i++) {
    // set the left and right pointers
    let left = i + 1;
    let right = nums.length - 1;
    // loop through the array
    while (left < right) {
      // set the sum
      const sum = nums[i] + nums[left] + nums[right];
      // check if the sum is equal to the target
      if (sum === target) {
        return sum;
      }
      // check if the sum is closer to the target than the closest
      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }
      // check if the sum is less than the target
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  // return the closest
  return closest;
};

// refectore the code to use the two pointer pattern
// Time complexity: O(n)
const threeSumClosestRef = (nums, target) => {
  // set the closest to infinity
  let max = 0;
  let closest = Infinity;
  // find the max value in the array
  // loop through the array and find the max value
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
  }
  closest = max;
  console.log(closest);
  // // create a new array with the max value
  // let arr = new Array(max * 2 + 1).fill(0);
  // // create a new array with the min value
  // let min = max;
  // // loop through the array
  // for (let i = 0; i < nums.length; i++) {
  //   let val = nums[i] + max;
  //   arr[val]++;
  //   min = Math.min(min, val);
  //   if (arr[val] > 1) {
  //     closest = Math.max(closest, val);
  //   }
  //   // if the
  //   if (target > 0) {
  //     closest = nums[0] + nums[1] + nums[2];
  //   }
  //   // if the target value less than the zero
  //   if (target < 0) {
  //     closest =
  //       nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3];
  //   }
  //   // if the target value is equal to zero
  //   if (target === 0) {
  //     closest = nums[0] + nums[1] + nums[2];
  //   }
  // }
  // // return the closest
  // return closest;
};

console.log(threeSumClosestRef([-1, 2, 1, -4], 1)); // 2
console.log(threeSumClosestRef([0, 0, 0], 1)); // 0
console.log(threeSumClosestRef([1, 1, 1, 0], -100)); // 2
console.log(threeSumClosestRef([1, 1, 1, 0], 100)); // 3
module.exports = {
  threeSumClosest,
  threeSumClosestRef,
};
