/*
 * Write a function called sameFrequency, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
 */

const sameFrequency = (arr1, arr2) => {
  // if the length of the arrays are not the same, return false
  if (arr1.length !== arr2.length) return false;
  // create two objects to store the frequency of the values in the arrays
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // loop through the first array and store the frequency of the values in the first object
  for (let val of arr1) {
    // if the value is not in the object, add it and set it to 1, else increment the value by 1
    if (frequencyCounter1[val]) {
      frequencyCounter1[val] += 1;
    } else {
      frequencyCounter1[val] = 1;
    }
  }

  // loop through the second array and store the frequency of the values in the second object
  for (let val of arr2) {
    // if the value is not in the object, add it and set it to 1, else increment the value by 1
    if (frequencyCounter2[val]) {
      frequencyCounter2[val] += 1;
    } else {
      frequencyCounter2[val] = 1;
    }
  }

  // loop through the first object
  for (let key in frequencyCounter1) {
    // if the key squared is not in the second object, return false
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // if the frequency of the value in the first object is not the same as the frequency of the value squared in the second object, return false
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }

  // if all the conditions are met, return true
  return true;
};

// Not Fast Solution
const sameFrequency_1 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    // check if the value of the first array squared is in the second array
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // the indexOf method returns the index of the value in the array it is nested looped in or -1 if the value is not in the array
    if (correctIndex === -1) return false;
    // remove the value from the second array
    arr2.splice(correctIndex, 1); // splice method removes the value at the index passed as the first argument and the second argument is the number of values to remove
  }

  return true;
};

// Frequency Counter Solution
const sameFrequencyCounter = (num1, num2) => {
  // convert the arrays to strings and sort them
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  // if the length of the strings are not the same, return false
  if (strNum1.length !== strNum2.length) return false;

  // create two objects to store the frequency of the values in the arrays
  let countNum1 = {};
  let countNum2 = {};

  // loop through the first string and store the frequency of the values in the first object
  for (let i = 0; i < strNum1.length; i++) {
    // if the value is not in the object, add it and set it to 1, else increment the value by 1
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    // if the value is not in the object, add it and set it to 1, else increment the value by 1
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  // loop through the first object and check if the value in the first object is the same as the value in the second object
  for (let key in countNum1) {
    // if the key is not in the second object, return false
    if (countNum1[key] !== countNum2[key]) return false;
  }

  // if all the conditions are met, return true
  return true;
};

const areThereDuplicates = (...args) => {
  // create an object to store the frequency of the values in the array
  let frequencyCounter = {};

  // loop through the array and store the frequency of the values in the object
  for (let val of args) {
    // if the value is not in the object, add it and set it to 1, else increment the value by 1
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
  }

  // loop through the object and check if the value is greater than 1
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) return true;
  }

  return false;
};

// Multiple Pointers Solution
const areThereDuplicates_1 = (...args) => {
  // sort the array
  args.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  // create two pointers
  let start = 0;
  let next = 1;

  // loop through the array
  while (next < args.length) {
    // if the value at the start pointer is the same as the value at the next pointer, return true
    if (args[start] === args[next]) {
      return true;
    }
    // increment the pointers
    start++;
    next++;
  }

  return false;
};

// Liner Solution
const areThereDuplicates_2 = (...args) => {
  return new Set(args).size !== args.length;
};

// Average pair solution
const averagePair = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  // loop through the array
  while (start < end) {
    // calculate the average of the values at the start and end pointers
    let average = (arr[start] + arr[end]) / 2;

    // if the average is the same as the target, return true
    // if the average is less than the target, increment the start pointer
    // if the average is greater than the target, decrement the end pointer
    if (average === target) return true;
    if (average < target) start++;
    if (average > target) end--;
  }

  // if the condition is not met, return false
  return false;
};

const isSubsequence = (str1, str2) => {
  // Base case
  if (str1.length !== str2.length) return true;

  let i = 0;
  let j = 0;

  // loop through the second string
  while (j < str2.length) {
    // if the value of the first string is the same as the value of the second string, increment the first pointer
    // if the first pointer is equal to the length of the first string, return true
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }

  return false;
};

// console.log(sameFrequencyCounter(182, 281)); // Output: true
// console.log(sameFrequencyCounter(34, 14)); // Output: false
// console.log(sameFrequencyCounter(3589578, 5879385)); // Output: true

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

// You code here
module.exports = {
  sameFrequency,
  sameFrequencyCounter,
  areThereDuplicates,
  averagePair,
  isSubsequence,
};
