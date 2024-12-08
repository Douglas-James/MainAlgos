const {twoSum, rotateString, makeFancyString,
    isPalindrome
} = require('../index');

// Test cases for twoSum.js
test('Example 1: nums = [2,7,11,15], target = 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('Example 2: nums = [3,2,4], target = 6', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test('Example 3: nums = [3,3], target = 6', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

// Test cases for rotateString.js
test('Example 1: A = "abcde", B = "cdeab"', () => {
    expect(rotateString("abcde", "cdeab")).toBe(true);
});

test('Example 2: A = "abcde", B = "abced"', () => {
    expect(rotateString("abcde", "abced")).toBe(false);
});

// Test cases for makeFancyString.js
test('Example 1: s = "leeetcode"', () => {
    expect(makeFancyString("leeetcode")).toBe("leetcode");
});

test('Example 2: s = "aaabaaaa"', () => {
    expect(makeFancyString("aaabaaaa")).toBe("aabaa");
});


// Test cases for isPalindrome.js
test('Example 1: x = 121', () => {
    expect(isPalindrome(121)).toBe(true);
});

test('Example 2: x = -121', () => {
    expect(isPalindrome(-121)).toBe(false);
});

test('Example 3: x = 10', () => {
    expect(isPalindrome(10)).toBe(false);
});
