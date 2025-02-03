// Write a function that returns the factorial of a number.
function factorial(num) {
  // base case
  if (num === 1) return 1;
  // recursive case
  return num * factorial(num - 1);
}

// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }
//   return total;
// }

module.exports = {
  factorial,
};
