/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
  // check if the length of s and goal are the same
  if(s.length !== goal.length) return false;

  // check if s and goal are the same
  if(s === goal) return true;

  // check if s and goal are the same after rotating
  for(let i = 0; i < s.length; i++) {
    // using slice to rotate the string by 1 character
    s = s.slice(1) + s[0];

    // without any built-in function
    // let temp = s[0];
    // for(let j = 1; j < s.length; j++) {
    //   s[j - 1] = s[j];
    // }
    // s[s.length - 1] = temp;

    // check if s and goal are the same
    if(s === goal) return true;
  }

  return false;
};


// Example 1:
// input s = "abcde", goal = "cdeab"
// output: true
let s = "abcde";
let goal = "cdeab";
console.log(rotateString(s, goal)); // true

// Example 2:
// input s = "abcde", goal = "abced"
// output: false
s = "abcde";
goal = "abced";
console.log(rotateString(s, goal)); // false

// sending file to jest test
module.exports = rotateString;
