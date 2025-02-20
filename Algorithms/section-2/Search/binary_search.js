/*
 * Binary Search is a search algorithm that finds the position of a target value within a sorted array.
 * Binary search compares the target value to the middle element of the array.
 * If the target value is equal to the middle element, the position is returned.
 * If the target value is less than the middle element, the search continues in the lower half of the array.
 * If the target value is greater than the middle element, the search continues in the upper half of the array.
 * The search continues until the target value is found or the search range is empty.
 * If the target value is not found, -1 is returned.
 * Time complexity: O(log n) - Binary search halves the search space at each step.
 * logarithmic time complexity: O(log n)
 */

const mainBinarySearch = (arr, target) => {
  // Pointer to the left and right of the array
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Calculate the middle index
    let mid = Math.floor((left + right) / 2);

    // If the target value is middle element, return the middle index
    // If the target value is less than the middle element, search in the left half of the array
    // If the target value is greater than the middle element, search in the right half of the array
    // Continue the search until the target value is found or the search range is empty
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      // Search in the right half of the array
      left = mid + 1;
    } else {
      // Search in the left half of the array
      right = mid - 1;
    }
  }

  // If the target value is not found, return -1
  return -1;
};

module.exports = {
  mainBinarySearch,
};
