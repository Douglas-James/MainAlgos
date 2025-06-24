// write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

const nestedEvenSum = (obj) => {
  // create a variable to store the sum
  let sum = 0;

  // iterate through the object
  for (let key in obj) {
    // if the value is an object, recursively call the function
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    }
    // if the value is a number and even, add it to the sum
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }

  return sum;
};

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

module.exports = nestedEvenSum;
