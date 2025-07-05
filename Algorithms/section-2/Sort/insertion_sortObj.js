/*
========================================
||      Insertion Sort  Object      ||
========================================
This is an implementation of the Insertion Sort algorithm.
It sorts an array by repeatedly taking an element from the unsorted portion and inserting it into the
*/

const insertionSortObj = (arr, comparatorOrKey) => {
  const result = arr.map((obj) => ({ ...obj })); // deep copy to avoid reference issues

  let comparator;

  if (typeof comparatorOrKey === "function") {
    comparator = comparatorOrKey;
  } else if (typeof comparatorOrKey === "string") {
    const key = comparatorOrKey;
    comparator = (a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  } else {
    // Default comparator for numbers (ascending)
    comparator = (a, b) => a - b;
  }

  for (let i = 1; i < result.length; i++) {
    let currentVal = result[i];
    let j = i - 1;

    while (j >= 0 && comparator(result[j], currentVal) > 0) {
      result[j + 1] = result[j];
      j--;
    }

    result[j + 1] = currentVal;
  }

  return result;
};

module.exports = insertionSortObj;
