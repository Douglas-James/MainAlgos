/*
================================================
||          Quick Sort Algorithm              ||
================================================
This is an implementation of the Quick Sort algorithm.
It sorts an array by selecting a 'pivot' element and partitioning the other elements into two
sub-arrays according to whether they are less than or greater than the pivot.
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

// Test cases
console.log(quickSort([5, 4, 3, 2, 1, -3, 0])); // [-3, 0, 1, 2, 3, 4, 5]

module.exports = quickSort;
