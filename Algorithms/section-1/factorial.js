// Time complexity: O(n!)
// Space complexity: O(n)
// Factorial time complexity: O(n!)
const factorial = (n) => {
  // base case
  if(n === 0){
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

module.exports = factorial;