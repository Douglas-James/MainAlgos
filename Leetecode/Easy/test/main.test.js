const {twoSum, rotateString, makeFancyString} = require('../index');

// Example 1:
// input s = "abcde", goal = "cdeab"
// output: true
test('rotateString - Example 1', () => {
  expect(rotateString("abcde", "cdeab")).toBe(true);
});

// Example 2:
// input s = "abcde", goal = "abced"
// output: false
test('rotateString - Example 2', () => {
  expect(rotateString("abcde", "abced")).toBe(false);
});


// Example 1:
// input nums = [2,7,11,15], target = 9
// output: [0,1]
test('twoSum - Example 1', () => {
  expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
});

// Example 2:
// input nums = [3,2,4], target = 6
// output: [1,2]
test('twoSum - Example 2', () => {
  expect(twoSum([3,2,4], 6)).toEqual([1,2]);
});


// test makeFancyString
test('makeFancyString - Example 1', () => {
  expect(makeFancyString("leeetcode")).toBe("leetcode");
});

test('makeFancyString - Example 2', () => {
  expect(makeFancyString("aaabaaaa")).toBe("aabaa");
});

test('makeFancyString - Example 3', () => {
  expect(makeFancyString("aab")).toBe("aab");
});
