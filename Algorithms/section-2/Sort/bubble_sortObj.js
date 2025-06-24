/*
======================================
||  Bubble Sort - Optimized Version ||
======================================
This bubble sort implementation can sort an array of objects based on a specified key or a custom comparator function.
======================================
*/

const bubbleSortObj = (arr, comparatorOrKey) => {
  const result = [...arr];

  let comparator;

  // if comparatorOrKey is a string, treat it as a key to compare objects
  if (typeof comparatorOrKey === "string") {
    const key = comparatorOrKey;
    comparator = (a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  } else if (typeof comparatorOrKey === "function") {
    comparator = comparatorOrKey;
  } else {
    throw new Error("Invalid comparator: must be function or key string");
  }

  // Bubble Sort Algorithm
  let swapped;
  const n = result.length;

  // outer loop for each element in the array
  // do {
  //   swapped = false;
  //   // inner loop to compare adjacent elements
  //   for (let i = 0; i < n - 1; i++) {
  //     if (comparator(result[i], result[i + 1]) > 0) {
  //       [result[i], result[i + 1]] = [result[i + 1], result[i]];
  //       swapped = true;
  //     }
  //   }
  // } while (swapped);

  // outer loop for each element in the array
  for (let i = n; i > 0; i--) {
    swapped = false;
    // inner loop to compare adjacent elements
    for (let j = 0; j < i - 1; j++) {
      if (comparator(result[j], result[j + 1]) > 0) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }
    // If no swaps were made, the array is sorted, and we can break early
    if (!swapped) break;
  }

  return result;
};

module.exports = bubbleSortObj;
