// write reverse function that takes a string and returns it in reverse
function reverse(str) {
  // base case
  if (str === '') return '';

  // recursive case
  return reverse(str.slice(1)) + str[0];
}

module.exports = reverse;