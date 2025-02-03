// write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

const capitalizeWords = (arr) => {
  // base case
  if (arr.length === 0) return [];
  // recursive case
  return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
};

module.exports = {
  capitalizeWords,
};
