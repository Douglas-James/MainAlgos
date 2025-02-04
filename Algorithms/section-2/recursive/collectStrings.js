// wrute function called collectStrings. Given an object, return an array of all the values in the object that are strings.

const collectStrings = (obj) => {
  // create an array to store the strings
  const strings = [];

  // base case
  if (Object.keys(obj).length === 0) return strings;

  // recursive case
  for (let key in obj) {
    // if the value is a string, add it to the array
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } // else if the value is an object and not an array, recursively call the function
    else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      strings.push(...collectStrings(obj[key]));
    }
  }

  // return the array of strings
  return strings;
};

module.exports = {
  collectStrings,
};
