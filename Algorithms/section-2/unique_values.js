// Linera Complexity O(n)
// time complexity O(n)
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let count = 0;
  for (let j = 1; j < arr.length; j++) {
    // if the current value is not equal to the previous value
    if (arr[count] !== arr[j]) {
      count++;
      arr[count] = arr[j];
    }
  }
  return count + 1;
}
countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
