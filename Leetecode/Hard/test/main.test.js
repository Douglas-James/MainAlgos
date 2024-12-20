const {findMedianSortedArrays, isMatch} = require("../index");

// Test case 1 for findMedianSortedArrays
test("Test case 1 for findMedianSortedArrays", () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
});

// Test case 2 for findMedianSortedArrays
test("Test case 2 for findMedianSortedArrays", () => {
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
});

// Test case 1 for isMatch
test("Test case 1 for isMatch", () => {
  expect(isMatch("aa", "a")).toBe(false);
});

// Test case 2 for isMatch
test("Test case 2 for isMatch", () => {
  expect(isMatch("aa", "a*")).toBe(true);
});

// Test case 3 for isMatch
test("Test case 3 for isMatch", () => {
  expect(isMatch("ab", ".*")).toBe(true);
});

