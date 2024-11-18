/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
  let result = '';
  let count = 0;
  let lastChar = '';

  // Loop through each character in the string
  for(let i = 0; i < s.length; i++) {
    // If the current character is the same as the last character
    if(lastChar === s[i]) {
      // Increment the count of consecutive characters
      count++;
    } else {
      // Reset the count for a new character
      count = 1;
    }

    // If the count of consecutive characters is less than 3
    if(count < 3) {
      // Append the character to the result string
      result += s[i];
    }

    // Update the last character to the current character
    lastChar = s[i];
  }
  return result;
};


module.exports = makeFancyString;
