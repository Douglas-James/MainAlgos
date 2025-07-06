/*
================================================
||          Quick Sort Algorithm              ||
================================================
This is a quick sort algorithm implementation.
1. It takes an array as input.
2. It selects a pivot element from the array.
3. It partitions the array into two sub-arrays: one with elements less than the pivot and one with elements greater than the pivot.
4. It recursively applies the quick sort algorithm to the two sub-arrays.
5. It combines the sorted sub-arrays and the pivot element to form the final sorted array.
*/

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  let left = [],
    right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

module.exports = quickSort;
