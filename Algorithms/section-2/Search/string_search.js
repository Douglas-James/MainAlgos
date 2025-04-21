// Naive String Search Algorithm
/* == Pseudocode ==
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
console.log(naiveStringSearch('hello', 'll')); // 1
console.log(naiveStringSearch('momagaagshksdakaf', 'ga')); // 1
console.log(naiveStringSearch('lorie loled', 'lo')); // 2
console.log(naiveStringSearch('aaaaa', 'a')); // 5
