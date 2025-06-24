/*
======================================
||  Bubble Sort - Optimized Version ||
======================================
This is an optimized version of the Bubble Sort algorithm.
It reduces the number of iterations by keeping track of whether any swaps were made during a pass.
======================================
*/

const bubbleSortOptimized = (arr) => {
  let noSwaps;
  // outer loop for each element in the array
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true; // Assume no swaps will be made in this pass
    // inner loop to compare adjacent elements
    for (let j = 0; j < i - 1; j++) {
      // if the current element is greater than the next element, swap them
      if (arr[j] > arr[j + 1]) {
        // Swap elements using destructuring assignment
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false; // A swap was made, so we set noSwaps to false
      }
    }
    // If no swaps were made, the array is sorted, and we can break early
    if (noSwaps) break;
  }
  return arr;
};

module.exports = bubbleSortOptimized;
