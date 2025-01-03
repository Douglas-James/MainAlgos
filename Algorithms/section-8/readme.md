# Section 8: Quick Sort

Quick Sort is a highly efficient sorting algorithm and is based on the Divide and Conquer principle. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

## Steps of Quick Sort:

1. **Choose a Pivot**: Select an element from the array to be the pivot.
2. **Partitioning**: Rearrange the array so that all elements less than the pivot are on the left, and all elements greater than the pivot are on the right.
3. **Recursively Apply**: Apply the same process to the left and right sub-arrays.

## Example:

Consider the array `[3, 6, 8, 10, 1, 2, 1]`:

1. Choose a pivot (e.g., `8`).
2. Partition the array into `[3, 6, 1, 2, 1]` and `[10]`.
3. Recursively apply the same steps to the sub-arrays.

## Advantages:

- **Efficiency**: On average, Quick Sort has a time complexity of O(n log n).
- **In-Place**: It requires only a small, constant amount of additional storage space.

## Disadvantages:

- **Worst-Case Performance**: The worst-case time complexity is O(n^2), which occurs when the smallest or largest element is always chosen as the pivot.
- **Stability**: Quick Sort is not a stable sort, meaning that the relative order of equal sort items is not preserved.

Quick Sort is widely used due to its efficiency and simplicity in implementation. It is particularly useful for large datasets where other sorting algorithms may be less efficient.
