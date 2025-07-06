# Binary Search

## What is Binary Search?

Binary search is an efficient algorithm for finding an item in a sorted list. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, the search continues on the lower half. Otherwise, it continues on the upper half. This process repeats until the value is found or the interval is empty.

**Time Complexity:**

- Best, Average, and Worst Case: O(log n)

**Requirements:**

- The list must be sorted.

## How Binary Search Works

1. Start with the entire sorted array.
2. Compare the target value to the middle element.
3. If they are equal, the search is complete.
4. If the target is less, repeat the search on the left half.
5. If the target is greater, repeat the search on the right half.
6. Repeat until the target is found or the interval is empty.

## Real-World Applications

- **Databases:** Quickly locate records in sorted data.
- **Libraries:** Search for a book by ISBN in a sorted catalog.
- **Operating Systems:** Find a specific file in a sorted directory.
- **Gaming:** Efficient collision detection or searching for objects.
- **Autocomplete:** Suggest words from a sorted dictionary.

## Example

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
```

## Summary

Binary search is a fundamental algorithm in computer science, providing fast search capabilities in sorted data structures. Its efficiency makes it widely used in software development and real-world applications.
