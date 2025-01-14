/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in
the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string,
without their order changing.
*/

function isSubsequence(str1, str2) {
  // return true if the first string is empty
  if (!str1) return true;

  // set the pointers to 0
  let i = 0;
  let j = 0;

  // loop through the str2
  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }

  // return false if the condition is not met
  return false;
}

// Recursive solution
// Time complexity: O(n)
// Space complexity: O(n)
const isSubsequenceRecursive = (str1, str2) => {
  // Base case
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  // if the first character of the first string is the same as the first character of the second string, call the function recursively
  if (str2[0] === str1[0])
    return isSubsequenceRecursive(str1.slice(1), str2.slice(1));
};

module.exports = {
  isSubsequence,
  isSubsequenceRecursive,
};
