/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // Initialize the maxArea to 0
  let maxArea = 0;
  // Initialize the left pointer to the beginning of the array
  let left = 0;
  // Initialize the right pointer to the end of the array
  let right = height.length - 1;
  // Loop through the array
  while (left < right) {
    // Calculate the area between the two pointers
    let area = Math.min(height[left], height[right]) * (right - left);
    // Update the maxArea if the current area is greater
    maxArea = Math.max(maxArea, area);
    // Move the pointer with the smaller height
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  // Return the maxArea
  return maxArea;
};

module.exports = maxArea;
