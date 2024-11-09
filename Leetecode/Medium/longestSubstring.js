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
