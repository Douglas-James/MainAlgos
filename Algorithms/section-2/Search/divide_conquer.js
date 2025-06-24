// naive approach
// Time complexity: O(n) linear time complexity
function search(arr, target) {
  // left pointer
  let left = 0;
  // right pointer
  let right = arr.length - 1;
  // loop through the array
  while (left <= right) {
    // find the middle index else return -1
    if (arr[left] === target) {
      return left;
    }
    left++;
  }

  return -1;
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(search(arr, 10)); // -1

// refactored solution
/*
 * Binary Search Implementation
 * Time Complexity: O(log n) - Binary search halves the search space at each step.
 * logarithmic time complexity
 * Example of Binary search: the number is 7
 * let say that you guessing a number 1 through 10.
 * let say there you have array of numbers [1-10]
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *  0, 1, 2, 3, 4, 5, 6, 7, 8, 9 = index
 * Binary search takes sorted array, and a target value and return index value or target value not find returns -1  depending on the target value.
 * is 5 the answer which is index of 4. no. then is it greater then 5 or less.
 * greater then 5 so we need middle index of that which is 7 = 8 value.
 * is 8 the answer no, it less so it get the middle index which is 5 = 6
 * so it must be 6 index which is the answer. return true
 */
function binarySearchs(arr, target) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    // Divide and Conquer approach
    let middle = Math.floor((min + max) / 2); // O(log n)
    let currentElement = arr[middle]; //

    // If currentElement is less than target, then target is in the right half
    // else if currentElement is greater than target, then target is in the left half
    // else return the middle index
    if (currentElement < target) {
      min = middle + 1;
    } else if (currentElement > target) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  // target is not present in array return -1
  return -1;
}

// let arrys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(binarySearchs(arrys, 7)); // 6 index

module.exports = binarySearchs;
