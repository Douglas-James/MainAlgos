/*
=======================================
||    Exported from:  Sort Folder    ||
=======================================
In this file, we export the sorting algorithms implemented in the section-2/Sort directory.
========================================   
*/

const bubbleSortOptimized = require("./bubble_optimized");
const bubbleSortUnoptimized = require("./bubble_sort_unoptimized");
const quickSort = require("./quick_sort");
const bubbleSortObj = require("./bubble_sortObj");
const selectionSort = require("./selection_sort");
const selectionSortObj = require("./selection_sortObj");
const insertionSort = require("./insertion_sort");

module.exports = {
  bubbleSortOptimized,
  bubbleSortUnoptimized,
  quickSort,
  bubbleSortObj,
  selectionSort,
  selectionSortObj,
  insertionSort,
};
