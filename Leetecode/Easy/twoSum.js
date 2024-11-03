/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // create a map to store the index of the number
  let map = new Map();

  // iterate through the array
  for(let i = 0; i < nums.length; i++) {
    // calculate the difference between the target and the current number
    let diff = target - nums[i];

    // check if the difference is in the map
    if(map.has(diff)) {
      // return the index of the difference and the current index
      return [map.get(diff), i];
    }

    // store the index of the current number
    map.set(nums[i], i);
  }

  return [];
};

// Example 1:
// input nums = [2,7,11,15], target = 9
// output: [0,1]
let nums = [2,7,11,15];
let target = 9;
console.log(twoSum(nums, target)); // [0,1]

// Example 2:
// input nums = [3,2,4], target = 6
// output: [1,2]
nums = [3,2,4];
target = 6;
console.log(twoSum(nums, target)); // [1,2]

// export to test the function
module.exports = twoSum;
