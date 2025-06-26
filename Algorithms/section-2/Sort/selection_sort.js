/*
================================
||  Selection Sort Algorithm  ||
================================
This implementation of the Selection Sort algorithm sorts an array in ascending order.
*/
// Old implementation of Selection Sort
// function selectionSort_a(arr) {
//   if (arr.length < 2) return arr;

//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       let temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//     }
//   }
//   return arr;
// }

// Function to swap two elements in an array
const swap = (arr, i, j) => {
  // swap the elements at index i and j in the array
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

// Recommended implementation of Selection Sort
const selectionSort = (arr) => {
  // if the length of the array is less than 2, return the array as it is already sorted
  if (arr.length < 2) return arr;

  // define the length of the array
  let n = arr.length;
  // innermost loop to find the minimum element
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // swap the found minimum element with the first element
    if (minIndex !== i) {
      swap(arr, i, minIndex);
    }
  }
  return arr;
};

module.exports = selectionSort;
