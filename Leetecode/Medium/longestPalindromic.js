// longest palindrome return palindromic substring in s
// Readings: https://leetcode.com/problems/longest-palindromic-substring/
// https://www.youtube.com/watch?v=hrtX0P2Q0Mo
const longestPalindrome = (s) => {
   // Longest string
   let longest = '';

  // help function to find the longest palindrome
  const isPal = (s, left, right) => {
      while(left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      };
      return s.slice(left + 1, right);
  };

  // Loop through the string
  for(let i = 0; i < s.length; i++) {
    // Find the longest palindrome with the center of i
    let odd = isPal(s, i, i);
    let even = isPal(s, i, i + 1);

    // Compare the length of the two palindromes
    let longer = odd.length > even.length ? odd : even;

    // Update the longest palindrome
    if(longer.length > longest.length) {
      longest = longer;
    }
  }

  // Return the longest palindrome
  return longest;
};

module.exports = longestPalindrome;
