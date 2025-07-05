/*
=========================================
||  Selection Sort - Optimized Version ||
=========================================
This Selection Sort implementation can sort an array of objects based on a specified key or a custom comparator function.
======================================
*/

const selectionSortObj = (arr, comparatorOrKey) => {
  const result = [...arr]; // make a shallow copy to avoid mutation

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

  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (comparator(result[j], result[minIndex]) < 0) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]];
    }
  }

  return result;
};

const obj = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 20 },
];

console.log(selectionSortObj(obj, "age"));

module.exports = selectionSortObj;
