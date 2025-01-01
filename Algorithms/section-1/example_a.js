/*
 * Binary Search Implementation
 * Time Complexity: O(log n) - Binary search halves the search space at each step.
 */

const binarySearch = (arr, start, end, target) => {
  // Base case: If start index exceeds end, the target is not in the array.
  if (start > end) {
    return false;
  }

  const midIndex = Math.floor((start + end) / 2);

  // Check if the middle element is the target.
  if (arr[midIndex] === target) {
    return true;
  }

  // If the target is smaller, search the left half of the array.
  if (arr[midIndex] > target) {
    return binarySearch(arr, start, midIndex - 1, target);
  }

  // Otherwise, search the right half of the array.
  return binarySearch(arr, midIndex + 1, end, target);
};

// Example usage:
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const target = 10;
// console.log(binarySearch(arr, 0, arr.length - 1, target));

// Export the function for testing or external use.
module.exports = {
  binarySearch,
};
