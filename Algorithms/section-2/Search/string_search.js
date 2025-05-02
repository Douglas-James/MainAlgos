/* == Naive Pseudocode ==
1. Loop through the long string
2. Loop through the short string
3. If the characters don't match, break out of the inner loop
4. If the characters do match, continue checking the next character
5. If you complexe the inner loop and all characters match, increment the count
6. Return the count
*/
function naiveStringSearch(long, short) {
  // Checking the length of the strings
  if (short.length > long.length) {
    return 0;
  }
  // Counter for the number of matches
  let count = 0;
  // Loop through the long string
  for (let i = 0; i < long.length; i++) {
    // Loop through the short string
    for (let j = 0; j < short.length; j++) {
      // If the characters don't match, break out of the inner loop
      if (long[i + j] !== short[j]) {
        break;
      }
      // If you complete the inner loop and all characters match, increment the count
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  // Return the count
  return count;
}

// Test cases
console.log(naiveStringSearch('momagaagshksdakaf', 'ga')); // 1

// Recursive String Search Algorithm
/* == Recursive Pseudocode ==
1. Check if the short string is empty
2. Check if the long string is empty
3. Check if the short string is longer than the long string
4. Check if the first character of the long string matches the first character of the short string
5. If it matches, check the rest of the strings
6. If it doesn't match, check the rest of the long string
7. Return the count
*/

function recursiveStringSearch(long, short) {
  // Check if the short string is empty
  if (short.length === 0) {
    return 0;
  }
  // Check if the long string is empty
  if (long.length === 0) {
    return 0;
  }
  // Check if the short string is longer than the long string
  if (short.length > long.length) {
    return 0;
  }
  // Check if the first character of the long string matches the first character of the short string
  if (long.startsWith(short)) {
    // If the long string starts with the short string, increment the count and check the rest
    return 1 + recursiveStringSearch(long.slice(1), short);
  } else {
    // If it doesn't match, check the rest of the long string
    return recursiveStringSearch(long.slice(1), short);
  }
}

console.log(recursiveStringSearch('aaaaa', 'aa')); // Expected: 4

// Export the functions
module.exports = {
  naiveStringSearch,
  recursiveStringSearch,
};
