# Doubly Linked List

A **doubly linked list** is a linear data structure where each element (node) contains three parts:

- Data
- A reference to the next node
- A reference to the previous node

This allows traversal of the list in both forward and backward directions.

## Structure

```
[Prev | Data | Next] <-> [Prev | Data | Next] <-> [Prev | Data | Next]
```

## Key Features

- **Bidirectional Traversal:** Nodes can be accessed from both ends.
- **Efficient Insertions/Deletions:** Adding or removing nodes is efficient, especially in the middle of the list.
- **Extra Memory:** Requires more memory than singly linked lists due to the additional pointer.

## Real-World Applications

- **Web Browsers:** Navigating back and forward between visited pages.
- **Music/Video Players:** Moving to previous or next tracks.
- **Undo/Redo Functionality:** In text editors or applications.
- **Navigation Systems:** Maintaining a history of locations.

Doubly linked lists are useful when frequent insertions, deletions, and bidirectional traversal are required.
