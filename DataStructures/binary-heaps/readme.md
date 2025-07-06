# Binary Heaps

A **binary heap** is a complete binary tree-based data structure that satisfies the heap property:

- **Max Heap:** Every parent node is greater than or equal to its children.
- **Min Heap:** Every parent node is less than or equal to its children.

Binary heaps are commonly implemented using arrays for efficient storage and access.

## Key Properties

- **Complete Binary Tree:** All levels are fully filled except possibly the last, which is filled from left to right.
- **Heap Property:** Maintains either max or min ordering between parent and child nodes.

## Operations

- **Insertion:** Add a new element and "heapify up" to restore the heap property.
- **Deletion (usually root):** Remove the root, replace with the last element, and "heapify down."
- **Peek:** Access the root element (max or min) in constant time.

## Real-World Applications

- **Priority Queues:** Efficiently manage tasks with priorities (e.g., CPU scheduling, Dijkstra's shortest path).
- **Heap Sort:** An efficient comparison-based sorting algorithm.
- **Event Simulation:** Manage events in order of occurrence.
- **Median Maintenance:** Quickly find the median in a data stream using two heaps.

Binary heaps provide efficient O(log n) time complexity for insertion and deletion, making them ideal for scenarios where quick access to the highest or lowest priority element is required.
