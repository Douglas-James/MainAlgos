// write recursive function called stringifyNumbers. Given an object, return a new object where all the values are strings.
const stringifyNumbers = (obj) => {
  // create a new object
  const newObj = {};

  // base case
  if (Object.keys(obj).length === 0) return newObj;

  // recursive case
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  // return the new object
  return newObj;
};

module.exports = {
  stringifyNumbers,
};
