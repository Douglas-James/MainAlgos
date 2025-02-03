// write funcation called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
const recursiveRange = (num) => {
  // base case
  if (num === 0) return 0;

  // recursive case
  return num + recursiveRange(num - 1);
};

module.exports = {
  recursiveRange,
};
