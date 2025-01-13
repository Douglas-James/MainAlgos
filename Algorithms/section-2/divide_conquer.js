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
//Time complexity: O(log n) logarithmic time complexity
// On Section 1 example_a.js there is a similar function
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

const arrys = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(binarySearchs(arrys, 7)); // 6 index

module.exports = {
  binarySearchs,
};
