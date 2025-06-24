/*
====================================
||     Binary Search Algorithm    ||
====================================
This is an implementation of the Binary Search algorithm.
It finds the index of a target value in a sorted array.
sorted portion of the array.
=======================
 */

const mainBinarySearch = (arr, target) => {
  // Pointer to the left and right of the array
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Calculate the middle index
    let mid = Math.floor((left + right) / 2);

    // If the target value is found, return the index of the target value
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half of the array
    } else {
      right = mid - 1; // Search in the left half of the array
    }
  }

  // If the target value is not found, return -1
  return -1;
};

module.exports = mainBinarySearch;
