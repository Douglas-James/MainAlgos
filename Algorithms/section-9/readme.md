# Section 9: Radix Sort

## Introduction

Radix Sort is a non-comparative sorting algorithm that sorts numbers by processing individual digits. It is particularly efficient for sorting large lists of numbers.

## How Radix Sort Works

1. **Digit by Digit Sorting**: Radix Sort processes each digit of the numbers, starting from the least significant digit (LSD) to the most significant digit (MSD).
2. **Stable Sorting**: It uses a stable sorting algorithm, such as Counting Sort, as a subroutine to sort the digits.
3. **Multiple Passes**: The algorithm makes multiple passes over the data, one for each digit.

## Example

Consider sorting the list of numbers: [170, 45, 75, 90, 802, 24, 2, 66]

1. **First Pass (LSD)**:

- Sort based on the least significant digit.
- Result: [170, 90, 802, 2, 24, 45, 75, 66]

2. **Second Pass**:

- Sort based on the second digit.
- Result: [802, 2, 24, 45, 66, 170, 75, 90]

3. **Third Pass (MSD)**:

- Sort based on the most significant digit.
- Result: [2, 24, 45, 66, 75, 90, 170, 802]

## Advantages

- **Efficiency**: Radix Sort can be more efficient than comparison-based sorting algorithms for large datasets.
- **Simplicity**: It is simple to implement and understand.

## Disadvantages

- **Memory Usage**: It requires additional memory for the counting sort subroutine.
- **Data Type Limitation**: It is primarily used for sorting integers and strings.

## Conclusion

Radix Sort is a powerful sorting algorithm for specific use cases, particularly when dealing with large datasets of integers. Its non-comparative nature and efficiency make it a valuable tool in the algorithmic toolbox.
