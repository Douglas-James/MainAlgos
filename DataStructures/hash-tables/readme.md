# Hash Tables

A **hash table** is a data structure that stores key-value pairs. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

## How Hash Tables Work

1. **Hash Function:** Converts a key into an array index.
2. **Insertion:** The value is stored at the computed index.
3. **Lookup:** The key is hashed to find the index and retrieve the value.
4. **Collision Handling:** If two keys hash to the same index, techniques like chaining or open addressing are used.

## Advantages

- **Fast lookups:** Average-case O(1) time complexity for search, insert, and delete.
- **Efficient memory usage:** Only stores what is needed.

## Real-World Uses

- **Databases:** Indexing data for quick retrieval.
- **Caching:** Storing recently used data for fast access.
- **Dictionaries:** Implementing key-value stores in programming languages (e.g., JavaScript's `Object` or `Map`, Python's `dict`).
- **Symbol Tables:** Compilers use hash tables to store variable/function names.

## Example

```javascript
// JavaScript object (hash table)
const phoneBook = {
  Alice: "123-4567",
  Bob: "987-6543",
};
console.log(phoneBook["Alice"]); // Output: 123-4567
```

Hash tables are fundamental for efficient data storage and retrieval in many software systems.
