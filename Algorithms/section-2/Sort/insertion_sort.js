/*
========================================
||      Insertion Sort Algorithm      ||
========================================
This is an implementation of the Insertion Sort algorithm.
It sorts an array by repeatedly taking an element from the unsorted portion and inserting it into the
*/
const insertionSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let currentVal;
  // outer loop
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    let j = i - 1; // Declare j outside so it can be defined
    // inner loop
    for (; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

module.exports = insertionSort;
