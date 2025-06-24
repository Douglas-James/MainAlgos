// write recursive function called stringifyNumbers. Given an object, return a new object where all the values are strings.
const stringifyNumbers = (obj) => {
  // create a new object
  const newObj = {};

  // base case
  if (Object.keys(obj).length === 0) return newObj;

  // recursive case
  for (let key in obj) {
    // if the value is a number, convert it to a string
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } // else if the value is an object and not an array, recursively call the function
    else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } // else, just copy the value
    else {
      newObj[key] = obj[key];
    }
  }

  // return the new object
  return newObj;
};

module.exports = stringifyNumbers;
