// string to integer
// URL: https://leetcode.com/problems/string-to-integer-atoi/
// Difficulty: Medium
// Time complexity: O(n)
// Space complexity: O(1)
const myAtoi = (s) => {
  // remove white spaces trim is a built-in function in JavaScript that removes white spaces from the beginning and the end of a string.
  s = s.trim();
  // check if the string is empty
  if (s.length === 0) return 0;
  // check if the first character is not a number or a sign
  // /[0-9+-]/ is a regular expression that checks if the first character is a number or a sign .test() is a built-in function in JavaScript that checks if a string matches a regular expression.
  if (!/[0-9+-]/.test(s[0])) return 0;
  // check if the first character is a sign
  let sign = 1;
  let i = 0;
  if (s[0] === '+' || s[0] === '-') {
    sign = s[0] === '-' ? -1 : 1;
    i++;
  }
  // check if the first character is a number
  if (!/[0-9]/.test(s[i])) return 0;
  // get the number
  let num = 0;
  // loop through the string to get the number
  while (i < s.length && /[0-9]/.test(s[i])) {
    // get the number parseInt is a built-in function in JavaScript that converts a string to an integer.
    num = num * 10 + parseInt(s[i]);
    i++;
  }
  // check the sign
  num = num * sign;
  // check the range
  if (num < -2147483648) return -2147483648;
  if (num > 2147483647) return 2147483647;
  return num;
};

module.exports = myAtoi;
