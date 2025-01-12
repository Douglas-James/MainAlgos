// nive solution
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

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(search(arr, 10)); // -1

// refactored solution
function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < target) {
      min = middle + 1;
    } else if (currentElement > target) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

module.exports = {
  binarySearch,
};
