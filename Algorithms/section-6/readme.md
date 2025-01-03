## Section 6: Insertion Sort

Insertion sort is a simple and intuitive sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:

1. **Simplicity**: It is easy to understand and implement.
2. **Adaptive**: It is efficient for data sets that are already substantially sorted.
3. **Stable**: It does not change the relative order of elements with equal keys.
4. **In-place**: It requires only a constant amount of additional memory space.

### How Insertion Sort Works

1. **Initialization**: Start with the first element, considering it as a sorted subarray of one element.
2. **Insertion**: Take the next element and compare it with the elements in the sorted subarray. Insert it into the correct position to maintain the sorted order.
3. **Repeat**: Repeat the process for all elements in the array until the entire array is sorted.

### Example

Consider the array `[5, 2, 9, 1, 5, 6]`:

1. Start with the first element `[5]`.
2. Insert `2` into the sorted subarray `[5]` to get `[2, 5]`.
3. Insert `9` into `[2, 5]` to get `[2, 5, 9]`.
4. Insert `1` into `[2, 5, 9]` to get `[1, 2, 5, 9]`.
5. Insert `5` into `[1, 2, 5, 9]` to get `[1, 2, 5, 5, 9]`.
6. Insert `6` into `[1, 2, 5, 5, 9]` to get `[1, 2, 5, 5, 6, 9]`.

The array is now sorted.
