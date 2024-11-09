// Import the function and ListNode class
const { addTwoNumbers, ListNode, lengthOfLongestSubstring } = require('../index');

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
