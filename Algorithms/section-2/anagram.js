/*
*  Given two strings, write a function to determine if the second string is an anagram of the first.
*  An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*  The strings can't be empty
*/

const anagram = (str1, str2) => {
  // check if the length of the strings are the same
  if(str1.length !== str2.length) return false;

  // create an object to store the frequency of the characters in the first string
  const lookup = {};

  // loop through the first string and store the frequency of the characters in the object
  for(let i = 0; i < str1.length; i++){
    // get the character at index i
    let letter = str1[i];
    // if the letter is not in the object, add it and set it to 1, else increment the value by 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  // loop through the second string
  for(let i = 0; i < str2.length; i++){
    // get the character at index i
    let letter = str2[i];
    // if the letter is not in the object, return false
    if(!lookup[letter]){
      return false;
    } else {
      // if the letter is in the object, decrement the value by 1
      lookup[letter] -= 1;
    }
  }

  // return true if all the conditions are met
  return true;
};

// naive approach
const anagram_a = (str1, str2) => {
  // check if the lengths of the strings are the same
  if (str1.length !== str2.length) return false;

  // create an array to store the characters of the first string
  let str1Arr = [];

  // loop through the first string and store each character in the array
  for (let i = 0; i < str1.length; i++) {
    str1Arr.push(str1[i]);
  }

  // loop through the second string
  for (let i = 0; i < str2.length; i++) {
    // find the index of the current character in the array
    let index = str1Arr.indexOf(str2[i]); // O(n) time complexity
    // if the character is not found in the array, return false
    if (index === -1) {
      return false;
    } else {
      // remove the character from the array
      str1Arr.splice(index, 1);
    }
  }

  // return true if all characters are matched
  return true;
}

// test the function
// console.log(anagram_a('', '')); // true
// console.log(anagram_a('aaz', 'zza')); // false
// console.log(anagram_a('anagram', 'nagaram')); // true
// console.log(anagram_a("rat","car")); // false
// console.log(anagram_a('awesome', 'awesom')); // false
// console.log(anagram_a('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
// console.log(anagram_a('qwerty', 'qeywrt')); // true
// console.log(anagram_a('texttwisttime', 'timetwisttext')); // true

module.exports = {
  anagram
};
