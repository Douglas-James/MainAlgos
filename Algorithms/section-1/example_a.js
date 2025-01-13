/*
 * Binary Search Implementation
 * Time Complexity: O(log n) - Binary search halves the search space at each step.
 * logarithmic time complexity
 */

const binarySearch = (arr, start, end, target) => {
  // Base case: If start index exceeds end, the target is not in the array.
  if (start > end) {
    return false; // Target not found.
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

const logTimeFunction = (n) => {
  let count = 0;
  // Loop until n is greater than 1.
  while (n > 1) {
    n = Math.floor(n / 2); // Divide n by 2 at each step.
    count++;
  }
  // Return the count of the number of times the loop ran.
  return count;
};

module.exports = {
  binarySearch,
};
