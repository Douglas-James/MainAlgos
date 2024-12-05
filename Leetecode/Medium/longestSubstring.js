const lengthOfLongestSubstring = (s) => {
  // two pointer approach
  let longest = 0;
  let current = 0;

  // map to store the index of the character
  let map = new Map();

  // loop through the string
  for (let i = 0; i < s.length; i++) {
    // check if the character is in the map
    if (map.has(s[i])) {
      // update the current pointer to the max of the current pointer and the index of the character
      current = Math.max(map.get(s[i]), current);
    }
    longest = Math.max(longest, i - current + 1);
    map.set(s[i], i + 1);
  }
  return longest;

};
module.exports = lengthOfLongestSubstring;

// this is the faster solution
const lengthOfLongestSubstrings = (s) => {
  // let hash map to store the unique characters
  // let left pointer to keep track of the left index
  // let result to store the maximum length of the substring
  // let right pointer to keep track of the right index
  let map = {};
  let left = 0;
  let result = 0;
  let right = 0;
  while (right < s.length) {
    console.log(map);
    console.log(result);
    // this first condition checks if the character is in the map
    if (map[s[right]] >= left) {
      left = map[s[right]] + 1; // update the left pointer to the index of the character + 1
    }
    // store the index of the character in the map
    map[s[right]] = right;

    // update the result
    result = Math.max(result, right - left + 1); // update the result to the maximum of the result and the difference between the right and left pointer + 1

    // increment the right pointer
    right++;
  }

  return result; // return the result
};

console.log(lengthOfLongestSubstrings("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstrings("bbbbb"));    // Output: 1 ("b")
console.log(lengthOfLongestSubstrings("pwwkew"));   // Output: 3 ("wke")
console.log(lengthOfLongestSubstrings(""));         // Output: 0 (Empty string)
console.log(lengthOfLongestSubstrings("au"));       // Output: 2 ("au")
