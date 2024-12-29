/*
* Write a funcation that accepts a string input,
* and returns the string in reverse copy
*/

// Time complexity: O(n) - linear time
const reverseString = (str) => {
  // create a variable to store the reversed string
  let reversed = '';

  // iterate through the string from right to left
  for (let i = str.length - 1; i >= 0; i--) {
    // add the character to the reversed string
    reversed += str[i];
  }

  return reversed;
};

// addUpToFirst that is slow
// Time complexity: O(n) - linear time
function addUpToFirst(x) {
  let total = 0;
  for (let i = 1; i <= x; i++) {
    total += i;
  }
  return total;

}

/* addUpToSecond that is faster
* Time complexity: O(1) - constant time
* This is a faster way to calculate the sum of all numbers from 1 to n
* using the formula n * (n + 1) / 2 0(1) - constant time
*/

function addUpToSecond(n) {
  return n * (n + 1) / 2;
}

// logAtLeast5 is a function that logs at least 5 times
function  logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// logAtMost5 is a function that logs at most 5 times
function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

/* function that 0(1) - constant time
*
*/
function constantFun(arr) {
 console.log(1000 * 1000);
}

/* function that 0(n^2) - quadratic time
* nested loop that runs n * n times
* cloumn and row
*/
function square(n) {
  // cloumn
  for (let i = 0; i < n; i++) {
    // row
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

/*
* cube function that runs 0(n^3) - cubic time
* nested loop that runs n * n * n times
* cloumn, row and height
*/
function cube(n) {
  // cloumn
  for (let i = 0; i < n; i++) {
    // row
    for (let j = 0; j < n; j++) {
      // height
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }
}

/*
* 0(log n) - logarithmic time
* function that runs log n times
* let say n = 8
* log 8 = 3
* 2^3 = 8
*/
function logFun(n){
  // if the number n is eqaul to zero return string 'done'
  if (n === 0) return 'done';
  // divide the number n by 2
  n = Math.floor(n / 2);

  // recursively call the function
  return logFun(n);
}

/*
* 0(log n) - logarithmic time
*/
// function that runs log n times
function logn(n){
  while(n > 1) {
    n = Math.floor(n / 2);
  }
  return n;
}


module.exports = {reverseString, addUpToFirst, addUpToSecond, logAtLeast5, logAtMost5};
