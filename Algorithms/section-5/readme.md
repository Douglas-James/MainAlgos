# Section 5: Selection Sort

In this section, we will focus on the Selection Sort algorithm. Selection Sort is a simple comparison-based sorting algorithm. It works by dividing the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty, and the unsorted sublist is the entire input list.

The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

Here is a step-by-step breakdown of the Selection Sort algorithm:

1. Start with the first element as the minimum.
2. Compare this minimum with the second element. If the second element is smaller, update the minimum.
3. Continue this process for the entire list.
4. Swap the minimum element with the first element of the unsorted sublist.
5. Move the boundary of the sorted sublist one element to the right.
6. Repeat the process for the remaining unsorted elements.

By the end of this section, you will understand how Selection Sort works and be able to implement it in your own code.
