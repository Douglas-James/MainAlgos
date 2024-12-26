// Leetcode: 12
// URL: https://leetcode.com/problems/integer-to-roman/
/* Description: seven different symbols respresent Roman numerals with the following values:
* I = 1
* V = 5
* X = 10
* L = 50
* C = 100
* D = 500
* M = 1000
* For example, two is written as II in Roman numeral, just two one's added together.
* return the Roman numeral representation of the given integer. so if the input is 3, the output should be "III"
*/
const intToRoman = (num) => {
  // create a dictionary to store the roman numeral values
  const romanDict = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };

  // create an array to store the keys of the romanDict
  const keys = Object.keys(romanDict);


  // create an empty string to store the roman numeral
  let roman = '';

  // iterate through the keys array
  for (let i = keys.length - 1; i >= 0; i--) {
    // if the number is greater than the key
    while (num >= keys[i]) {
      // subtract the key from the number
      num -= keys[i];
      // add the roman numeral to the string
      roman += romanDict[keys[i]];
    }
  }

  return roman;
};

module.exports = intToRoman;
