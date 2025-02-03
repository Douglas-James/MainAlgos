/*
* Recursive functions are functions that call themselves.
They are useful for solving problems that can be broken down into smaller, repetitive problems.
*/

// Write function evenArray that takes an array of numbers and returns a new array containing only the even numbers.
const evenArray = (arr) => {
  // Base case
  if (arr.length === 0) {
    return [];
  }
  // Recursive case - if the first element is even, add it to the new array and call the function again with the rest of the array
  const [first, ...rest] = arr;
  return first % 2 === 0 ? [first, ...evenArray(rest)] : evenArray(rest);
};

// Test cases
console.log(evenArray([1, 2, 3, 4, 5])); // [2, 4]
console.log(evenArray([2, 4, 6, 8, 10])); // [2, 4, 6, 8, 10]
console.log(evenArray([1, 3, 5, 7, 9])); // []
console.log(evenArray([])); // []
console.log(evenArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2, 4, 6, 8, 10]

const countDown = (num) => {
  // Base case
  if (num === 0) {
    console.log('Blast off!');
    return;
  }
  console.log(num);
  num--;
  // Recursive case
  countDown(num);
};

// Test cases
countDown(5); // 5 4 3 2 1 Blast off!

// This function can also be written using a for loop
function countDown_2(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
  console.log('Blast off!');
}
