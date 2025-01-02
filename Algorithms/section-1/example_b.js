/*
  Write a function that has a time complexity of O(n log n)
  nLogNFun(10) => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  nLogNFun(5) => 1, 2, 3, 4, 5
  nLogNFun(3) => 1, 2, 3
  nLogNFun(1) => 1
*/
// function nLogNFun(n){
//   let x = n;
//   while(n > 1){
//     n = Math.floor(n / 2);
//     for(let i = 1; i <= x; i++){
//       console.log(i);
//     }
//   }
// }
/*
  Merge Sort function that takes an array of numbers and returns a sorted array
  mergeSort([38, 27, 43, 3, 9, 82, 10]) => [3, 9, 10, 27, 38, 43, 82]

  Time Complexity: O(n log n)
  Space Complexity: O(n)

*/
function mergeSort(arr){
  // base case
  if(arr.length <= 1){
    return arr;
  }
  // find the middle index of the array
  let middleIndex = Math.floor(arr.length / 2);
  // split the array into two halves
  let left = arr.slice(0, middleIndex);
  let right = arr.slice(middleIndex, arr.length);
  // recursively call the mergeSort function on the left and right halves
  return merge(mergeSort(left), mergeSort(right));
}
/*
 Merge function that takes two arrays and returns a single sorted array
  merge([27], [38]) => [27, 38]
  merge([27, 38], [43]) => [27, 38, 43]
  merge([3, 9], [10, 82]) => [3, 9, 10, 82]

  Time Complexity: O(n)
  Space Complexity: O(n)
*/

function merge(left, right){
  // create an empty array to store the sorted elements
  let result = [];

  // create two pointers to keep track of the elements in the left and right arrays
  let leftIndex = 0;
  let rightIndex = 0;

  // iterate through the left and right arrays
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      result.push(left[leftIndex]);
      leftIndex++;
    }else{
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // return the result array concatenated with the remaining elements in the left and right arrays
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 *  fib function that takes a number and returns the nth number in the Fibonacci sequence
 *
 *          fib(4)
 *         fib(4)
 *        /      \
 *    fib(3)    fib(2)
 *    /   \      /   \
 * fib(2) fib(1) fib(1) fib(0)
 * /   \
 *fib(1) fib(0)

 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 */

// function fib(n){
//   if(n === 0){
//     return 0;
//   }
//   if(n <= 1){
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

/**
 *  f function that takes a number and prints a pattern of asterisks
 *  Time Complexity: O(n!)
 * Space Complexity: O(n)
 */
// function f(n){
//   if(n === 0){
//     console.log('*************');
//     return;
//   }
//   for(let i = 0; i < n; i++){
//     f(n - 1);
//   }
// }
/*
* two take a number and performance some operation
* Time Complexity: O(2n)
* Space Complexity: O(1)
*/
// function two(n){
//   // 0(n)
//   for(let i = 0; i < n; i++){
//     // do something
//   }
//   // 0(n)
//   for(let j = 0; j < n; j++){
//     // do something
//   }

//   // 0(n + n) => 0(2n)
// }

/*
* twoLoops function that takes two numbers a and b and performs some operation
* Time Complexity: O(a + b)
* Space Complexity: O(1)
*/
// function  twoLoops(a, b) {
//   for(let i = 0; i < a; i++){
//     // do something
//   } //

//   for(let j = 0; j < b; j++){
//     // do something
//   }

// }

/*
* twoLoopsNested function that takes a number and b number and performs some operation
* Time Complexity: O(a * b)
* Space Complexity: O(1)
*/
// function twoLoopsNested(a, b){
//   // 0(a)
//   for(let i = 0; i < a; i++){
//     // 0(b)
//     for(let j = 0; j < b; j++){
//       // do something
//     }
//   }

//   // 0(a * b)
// }

/*
* twoLoopsNested function that takes a is o(n2)
* Time Complexity: O(n^2)
* Space Complexity: O(1)
*/

// function twoLoops(n){
//   // 0(n)
//   for(let i = 0; i < n; i++){
//     // 0(n)
//     for(let j = 0; j < n; j++){
//       // do something
//     }
//   }

//   // 0(n^2)
// }


// export all the functions
module.exports = {
  mergeSort,
  merge
};
