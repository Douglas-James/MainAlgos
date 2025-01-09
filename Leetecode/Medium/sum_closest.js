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

threeSumClosest([-1, 2, 1, -4], );
module.exports = {
    threeSumClosest
}
