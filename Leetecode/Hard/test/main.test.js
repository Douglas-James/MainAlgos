const {findMedianSortedArrays} = require("../index");

// Test case 1 (Example 1) from Leetecode (https://leetcode.com/problems/median-of-two-sorted-arrays/) finds the median of two sorted arrays.
test('Median of two sorted arrays', () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0);
});

// Test case 2 (Example 2) from Leetecode (https://leetcode.com/problems/median-of-two-sorted-arrays/) finds the median of two sorted arrays.
test('Median of two sorted arrays', () => {
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
});

// Test case 3 (Example 3) from Leetecode (https://leetcode.com/problems/median-of-two-sorted-arrays/) finds the median of two sorted arrays.
test('Median of two sorted arrays', () => {
  expect(findMedianSortedArrays([0, 0], [0, 0])).toBe(0.0);
});
