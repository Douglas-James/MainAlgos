// create function call fib that takes a number n and returns the nth number in the Fibonacci sequence.
// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.
// The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.
const fib = (n) => {
  // base case
  if (n <= 2) return 1;

  // recursive case
  return fib(n - 1) + fib(n - 2);
};

// test case
// console.log(fib(4)); // 3

module.exports = fib;