/*
 * Binary Search Implementation
 * Time Complexity: O(log n) - Binary search halves the search space at each step.
 *
 * Example of Binary Search:
 * Suppose you are guessing a number between 1 and 10.
 * You have an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
 * The indices of the array are [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].
 *
 * Binary search takes a sorted array and a target value, and returns true or false depending on whether the target value is in the array.
 *
 * For example, if the target number is 7:
 * 1. Check the middle element of the array. The middle index is (0 + 9) / 2 = 4, so the middle element is 5.
 * 2. Since 7 is greater than 5, search the right half of the array.
 * 3. The new search range is from index 5 to 9. The middle index is (5 + 9) / 2 = 7, so the middle element is 8.
 * 4. Since 7 is less than 8, search the left half of this subarray.
 * 5. The new search range is from index 5 to 6. The middle index is (5 + 6) / 2 = 5, so the middle element is 6.
 * 6. Since 7 is greater than 6, search the right half of this subarray.
 * 7. The new search range is from index 6 to 6. The middle index is 6, so the middle element is 7.
 * 8. The target value 7 is found, so return true.
 */
//         arguments:array,  0,    10,   7
const binarySearch = (arr, start, end, target) => {
  // Base case: If start index exceeds end, the target is not in the array.
  if (start > end) {
    return false; // Target not found.
  }

  const midIndex = Math.floor((start + end) / 2); // 0 + 10 / 2 = 5

  // Check if the middle element is the target.
  if (arr[midIndex] === target) {
    return true;
  }

  // If the target is smaller, search the left half of the array.
  if (arr[midIndex] > target) {
    return binarySearch(arr, start, midIndex - 1, target);
  }

  // Otherwise, search the right half of the array.
  return binarySearch(arr, midIndex + 1, end, target);
};
//             0, 1, 2, 3, 4, 5, 6, 7, 8, 9
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7; // target value
const start = 0; // where it starts
const end = array.length - 1; // is the last index 9
// console.log(array[end]); // 10

console.log(binarySearch(array, start, end, target)); // index 6 but it return true meaning yes there is 7

// const logTimeFunction = (n) => {
//   let count = 0;
//   // Loop until n is greater than 1.
//   while (n > 1) {
//     n = Math.floor(n / 2); // Divide n by 2 at each step.
//     count++;
//   }
//   // Return the count of the number of times the loop ran.
//   return count;
// };

module.exports = {
  binarySearch,
};
