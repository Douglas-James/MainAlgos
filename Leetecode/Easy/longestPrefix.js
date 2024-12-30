/*
* Longest Common Prefix
* Write a function to find the longest common prefix string amongst an strsay of strings.
* If there is no common prefix, return an empty string "".
* Example 1:
* Input: ["flower","flow","flight"]
* Output: "fl"
*/


function longestPrefix(strs){
  // base case: if the array is empty, return an empty string
  if (strs.length === 0) {
    return "";
  }

  // if the array contains only one string, return that string
  if (strs.length === 1) {
    return strs[0];
  }

  // iterate through each character of the first string
  for (let i = 0; i < strs[0].length; i++) {
    // iterate through each string in the array
    for (let j = 0; j < strs.length; j++) {
      // if the current character does not match the character at the same position in the first string
      if (strs[j][i] !== strs[0][i]) {
        // return the substring from the start to the current position
        return strs[0].slice(0, i);
      }
    }
  }

  // if all characters match, return the entire first string
  return strs[0];
};

console.log(longestPrefix(["flower","flow","flight"])); // fl
console.log(longestPrefix(["dog","racecar","car"])); // "" empty string
console.log(longestPrefix(["aaassaaaas","aaassaaas","aaaaaasss"])); // "aaa"




module.exports = longestPrefix;
