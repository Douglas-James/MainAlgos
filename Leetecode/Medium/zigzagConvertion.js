// zigzag pattern convertion
// Source: LeetCode (https://leetcode.com/problems/zigzag-conversion/)
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);
const convert = (s, numRows) => {
  // If the number of rows is 1, return the string as it is
  if (numRows === 1) return s;

  // Create an array of strings to represent the rows
  let rows = [];

  // Loop through the minimum of the number of rows and the length
  for (let i = 0; i < Math.min(numRows, s.length); i++) {
    rows.push('');
  }

  // rows = ['', '', ''] for numRows = 3 and s = 'PAYPALISHIRING'

  let currentRow = 0;
  let goingDown = false;

  // Loop through the string and add each character to the appropriate row
  for (const char of s) {
    rows[currentRow] += char;
    // If we reach the first or last row, change the direction
    if (currentRow === 0 || currentRow === numRows - 1) {
      // Change the direction
      goingDown = !goingDown;
    }

    // Increment or decrement the current row based on the direction
    currentRow += goingDown ? 1 : -1;
  }

  // Variable to store the result string
  let result = '';

  // Concatenate all the rows to get the result
  for (const row of rows) {
    result += row;
  }

  return result;
};

// Time complexity: O(n) where n is the length of the string s and numRows is the number of rows

module.exports = convert;

// Function that print the zigzag pattern
const printZigZag = (s, numRows) => {
  const result = convert(s, numRows);
  // for(let i = 0; i < numRows; i++) {
  //   console.log(result[i]);
  // }
};


// Test cases
printZigZag('PAYPALISHIRING', 3); // PAHNAPLSIIGYIR
printZigZag('PAYPALISHIRING', 4); // PINALSIGYAHRPI
