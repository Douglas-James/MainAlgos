// Leete code problem: 9. Palindrome Number
// Level: Easy
// Link: https://leetcode.com/problems/palindrome-number/
// Description: Given an integer x, return true if x is palindrome integer.
const isPalindrome = (x) => {
 // step 1: Check if the number is negative
 if(x < 0) return false;

 // if the number is less than 10, it is a palindrome
 if(x < 10) return true;

 // step 2: reverse the number
 let reverse = 0;
 let original = x;
 while(x > 0){
     reverse = reverse * 10 + x % 10;
     x = Math.floor(x / 10);
 }

 // step 3: Compare the original number with the reversed number
 return original === reverse;

};

module.exports = isPalindrome;
