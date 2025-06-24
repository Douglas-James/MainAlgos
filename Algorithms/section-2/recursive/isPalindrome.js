// write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

const isPalindrome = (str) => {
  // base case
  if (str.length <= 1) return true;

  // recursive case
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }

  return false;
};

module.exports =  isPalindrome;
