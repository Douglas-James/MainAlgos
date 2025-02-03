const quickSort = (arr) => {
  // Base case
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  [left, right] = [[], []]; // Destructure the array into two empty arrays
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // Recursive case - call quickSort on the left and right arrays and concatenate the results
  return [...quickSort(left), pivot, ...quickSort(right)];
};

// Test cases
console.log(quickSort([5, 4, 3, 2, 1, -3, 0])); // [-3, 0, 1, 2, 3, 4, 5]
