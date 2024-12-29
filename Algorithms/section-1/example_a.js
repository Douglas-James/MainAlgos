/* Binary Search
*
*/
// let arry = [1, 2, 3, 4, 5, 6, 7, 8];
// let start = 0;
// let end = arry.length - 1; // 7 index
// let target = 10;
// time complexity: O(log n) - log base 2 of n
function binarySearch(arr, start, end, target) {
  // base case
  if(start > end) {
    return false;
  }
  let midIndex = Math.floor((start + end) / 2);
  if(arr[midIndex] === target) {
    return true;
  }

  if(arr[midIndex] > target) {
    return binarySearch(arr, start, midIndex - 1, target);
  }else{
    return binarySearch(arr, midIndex + 1, end, target);
  }

}
// console.log(binarySearch(arry, start, end, target));

// export all the functions
module.exports = {
  binarySearch
};
