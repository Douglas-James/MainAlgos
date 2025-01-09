// Import the function and ListNode class
const { addTwoNumbers, ListNode, lengthOfLongestSubstring, maxArea,longestPalindrome, convert,
    reverse, myAtoi, intToRoman, threeSumClosest} = require('../index');

// Helper function to convert array to linked list
function arrayToList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}

// Helper function to convert linked list to array
function listToArray(node) {
    let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}

// Jest test cases
test('Example 1: l1 = [2,4,3], l2 = [5,6,4]', () => {
    const l1 = arrayToList([2, 4, 3]);
    const l2 = arrayToList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([7, 0, 8]);
});

test('Example 2: l1 = [0], l2 = [0]', () => {
    const l1 = arrayToList([0]);
    const l2 = arrayToList([0]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([0]);
});

test('Example 3: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]', () => {
    const l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = arrayToList([9, 9, 9, 9]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});


// Test cases for longestSubstring.js
test('Example 1: "abcabcbb"', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

test('Example 2: "bbbbb"', () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});

test('Example 3: "pwwkew"', () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});


// Test cases for containerMostWater.js
test('Example 1: [1,8,6,2,5,4,8,3,7]', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});

test('Example 2: [1,1]', () => {
    expect(maxArea([1, 1])).toBe(1);
});

test('Example 3: [4,3,2,1,4]', () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
});

// Test cases for addTwoNumbers.js
test('Example 1: l1 = [2,4,3], l2 = [5,6,4]', () => {
    const l1 = arrayToList([2, 4, 3]);
    const l2 = arrayToList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([7, 0, 8]);
});

test('Example 2: l1 = [0], l2 = [0]', () => {
    const l1 = arrayToList([0]);
    const l2 = arrayToList([0]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([0]);
});

// Test cases for longestPalindromic.js
test('Example 1: "babad"', () => {
    expect(longestPalindrome("babad")).toBe("bab");
});

test('Example 2: "cbbd"', () => {
    expect(longestPalindrome("cbbd")).toBe("bb");
});


// Test cases for zigzagConvertion.js
test('Example 1: "PAYPALISHIRING", numRows = 3', () => {
    expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
});

test('Example 2: "PAYPALISHIRING", numRows = 4', () => {
    expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
});

test('Example 3: "A", numRows = 1', () => {
    expect(convert("A", 1)).toBe("A");
});

// Test cases for reverseInteger.js
test('Example 1: 123', () => {
    expect(reverse(123)).toBe(321);
});

test('Example 2: -123', () => {
    expect(reverse(-123)).toBe(-321);
});

test('Example 3: 120', () => {
    expect(reverse(120)).toBe(21);
});

// Test cases for stringtoInteger.js
test('Example 1: "42"', () => {
    expect(myAtoi("42")).toBe(42);
});

test('Example 2: "   -42"', () => {
    expect(myAtoi("   -42")).toBe(-42);
});

test('Example 3: "4193 with words"', () => {
    expect(myAtoi("4193 with words")).toBe(4193);
});


// Test cases for Integertoroman.js
test('Example 1: 3', () => {
    expect(intToRoman(3)).toBe("III");
});

test('Example 2: 4', () => {
    expect(intToRoman(4)).toBe("IV");
});

test('Example 3: 9', () => {
    expect(intToRoman(9)).toBe("IX");
});

// Test cases for sum_closest.js
test('Example 1: nums = [-1,2,1,-4], target = 1', () => {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
});

test('Example 2: nums = [0,0,0], target = 1', () => {
    expect(threeSumClosest([0, 0, 0], 1)).toBe(0);
});

test('Example 3: nums = [0, 1, 2], target = 3', () => {
    expect(threeSumClosest([0, 1, 2], 3)).toBe(3);
});
