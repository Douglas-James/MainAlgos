/*
 * write a function called findLongestSubstring which accepts a string and returns the length of the longest substring with all distinct characters
 */

const findLongestSubstring = (str) => {
  // create a set to store the characters
  const set = new Set();
  // create a left pointer
  let left = 0;
  // create a right pointer
  let right = 0;
  // create a max variable to store the max length
  let max = 0;
  // loop through the string
  while (right < str.length) {
    // if the character is not in the set
    if (!set.has(str[right])) {
      // add the character to the set
      set.add(str[right]);
      // increment the right pointer
      right++;
      // set the max to the max of the set size and the current max
      max = Math.max(max, set.size);
    } else {
      // delete the character from the set
      set.delete(str[left]);
      // increment the left pointer
      left++;
    }
  }
  // return the max
  return max;
};

// Sliding window pattern
const findLongestSubstringSlidingWindow = (str) => {
  // create a map to store the characters
  const char_index = {};
  let longest = 0;
  let start = 0;
  // loop through the string
  for (let i = 0; i < str.length; i++) {
    // get the character
    const char = str[i];
    // if the character is in the map
    if (char_index[char]) {
      start = Math.max(start, char_index[char]);
    }
    // set the longest
    longest = Math.max(longest, i - start + 1);
    // set the character index
    char_index[char] = i + 1;
  }
  // if all conditions are met, return the longest
  return longest;
};

module.exports = {
  findLongestSubstring,
  findLongestSubstringSlidingWindow
};
