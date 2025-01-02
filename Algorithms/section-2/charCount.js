/*
* You given a string and you are to return the count of each character in the string
* The string can contain any character
* The string can't be empty
* The string can't be null
* The string can't white spaces
* Time Complexity: O(n)
* Space Complexity: O(n)
*/
function charCount(str){
  // Create an object to store the count of each character
  const count = {};
  // Loop through the string and count each character
  for(let i = 0; i < str.length; i++){
    // Get the character at index i
    const char = str[i].toLowerCase();
    // Check if the character is alphanumeric (a-z, 0-9) using a regular expression
    if(/[a-z0-9]/.test(char)){
      // If the character is in the count object, increment the count
      if(count[char] > 0){
        count[char]++;
      } else {
        // If the character is not in the count object, add it to the count object
        count[char] = 1;
      }
    }

  }
  // Return the count object
  return count;
}


const result = charCount('Hello World');
console.log(result); // Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

// The string can't be empty
// The string can't be null
// The string can't white spaces
// Code here for the refactored version



// Time Complexity: O(n)
function isAlphaNumeric(char){
  const code = char.charCodeAt(0);
  if(!(code > 47 && code < 58) && // numeric (0-9)
     !(code > 64 && code < 91) && // upper alpha (A-Z)
     !(code > 96 && code < 123)){ // lower alpha (a-z)
    return false;
  }
  return true;
}























module.exports = {
  charCount
};
