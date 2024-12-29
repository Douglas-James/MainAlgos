// Leetcode
// Roman to Integer
// URL: https://leetcode.com/problems/roman-to-integer/
// Description: Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000


const romanToInt = (s) => {
  // create a dictionary to store the roman numeral values and their corresponding integer values
  const romanDict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // create a variable to store the result
  let result = 0;

  // create a variable to store the previous value
  let prev = 0;

  // iterate through the string from right to left
  for (let i = s.length - 1; i >= 0; i--) {
    // create a variable to store the current value
    let current = romanDict[s[i]];

    // if the current value is greater than or equal to the previous value, add the current value to the result
    if (current >= prev) {
      result += current;
    } else {
      result -= current;
    }

    // set the previous value to the current value
    prev = current;
  }

  return result;
};

module.exports = romanToInt;
