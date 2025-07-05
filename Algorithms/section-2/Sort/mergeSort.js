/*
===========================================
||               Merge Sort              ||
===========================================
This is an implementation of the Merge Sort algorithm.
It sorts an array by dividing it into halves, sorting each half, and then merging the sorted halves back together.
=======================
*/
// recrusive merge sort
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

module.exports = mergeSort;
