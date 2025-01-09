function logarithmic(n) {
  let count = 0;
  // Loop until n is greater than 1.
  while (n > 1) {
    n = Math.floor(n / 2); // Divide n by 2 at each step.
    count++;
  }
  // Return the count of the number of times the loop ran.
  return count;
}

// time complexity: O(log n)
const logn = (n) =>{
  while(n > 1){
    n = Math.floor(n/2); // Divide n by 2 at each step.
  }
  return n;
}

console.log(logarithmic(1000)); // 10
console.log(logn(10)) // 1


// binary search
// time complexity: O(log n)
// space complexity: O(1)
const binarySearch = (arr, target) => {
  // Set the start, end, and mid variables.
  let start = 0;
  let end = arr.length - 1;
  // remember to use Math.floor to round down. In computer science the integer 2 is always is used as the base for logarithms. Log base 2 of 8 is 3 because 2^3 = 8.
  let mid = Math.floor((start + end) / 2);
  while(start <= end){
    if(arr[mid] === target){
      return mid;
    }else if(arr[mid] < target){
      start = mid + 1;
    }else{
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return -1;
}

