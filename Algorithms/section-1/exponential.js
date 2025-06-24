// exponential time complexity: O(2^n)
// space complexity: O(n)
const exponential = (n) => {
  if(n === 0){
    return 1;
  }
  return 2 * exponential(n - 1);
}

module.exports = exponential;
