// Leetcode link: https://leetcode.com/problems/regular-expression-matching/
// Difficulty: Hard
// Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where:
// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).
// Example 1:
// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:
// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

// Solution 1
const isMatch = (s, p) => {
  // Step 1: Create empty helper function
  const dp = (i, j) => {
    // Step 2: Check if the value is already in the cache
    if (cache[i][j] !== undefined) return cache[i][j];
    // Step 3: Check if the pattern is empty
    if (j === p.length) return i === s.length;
    // Step 4: Check if the pattern has a star
    const match = i < s.length && (s[i] === p[j] || p[j] === '.');
    if (j + 1 < p.length && p[j + 1] === '*') {
      // Step 5: If the pattern has a star, check if the pattern is a match
      cache[i][j] = dp(i, j + 2) || (match && dp(i + 1, j));
    } else {
      // Step 6: If the pattern does not have a star, check if the pattern is a match
      cache[i][j] = match && dp(i + 1, j + 1);
    }
    return cache[i][j];
  };

  // Step 7: Initialize the cache
  const cache = Array.from({ length: s.length + 1 }, () => Array(p.length + 1));

  // Step 8: Return the result
  return dp(0, 0);
};


module.exports = isMatch;
