/*
====================================
||     Bubble Sort (Unoptimized)  ||
====================================
This is an unoptimized version of the Bubble Sort algorithm.
==================================
*/
// This function swaps two elements in an array
function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
}
const bubbleSortUnoptimized = (arr) => {
  // outer loop for each element in the array
  for (let i = arr.length; i > 0; i--) {
    // inner loop to compare adjacent elements
    for (let j = 0; j < i - 1; j++) {
      // if the current element is greater than the next element, swap them
      if (arr[j] > arr[j + 1]) {
        // const temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

console.log(bubbleSortUnoptimized([5, 3, 8, 4, 2, -1])); // [-1, 2, 3, 4, 5, 8]

module.exports = bubbleSortUnoptimized;
