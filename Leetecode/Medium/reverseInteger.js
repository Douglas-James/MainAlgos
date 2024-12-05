//  Leetcode link: https://leetcode.com/problems/reverse-integer/
//  Description: Given a 32-bit signed integer, reverse digits of an integer.
//  Example 1:
//  Input: x = 123
//  Output: 321
const reverse = (x) => {
  // Variable to store the result
  let result = 0;
  // Store the sign of x
  const sign = x < 0 ? -1 : 1;
  // Make x positive
  x = Math.abs(x);
  // Loop until x is not 0
  while (x !== 0) {
    // Get the last digit of x
    let digit = x % 10;
    // Remove the last digit from x
    x = Math.floor(x / 10);
    // Check for overflow before updating the result
    if (result > (Math.pow(2, 31) - 1) / 10) {
      return 0;
    }
    // Update the result
    result = result * 10 + digit;
  }
  // Apply the sign to the result
  result *= sign;
  // Check if the result is within the 32-bit signed integer range
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  }

  return result;
}

// Time complexity: O(log(x)) where x is the input number
// Space complexity: O(1)

module.exports = reverse;
