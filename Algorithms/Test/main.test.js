// all the import down here
const { reverseString, addUpToFirst, addUpToSecond, logAtLeast5, logAtMost5, binarySearch, mergeSort, merge} = require('../index');
const {performance} = require('perf_hooks');

// section 1  test file
// example test
test('Example 1: "hello"', () => {
    expect(reverseString("hello")).toBe("olleh");
});

test('Example 2: "world"', () => {
    expect(reverseString("world")).toBe("dlrow");
});

test('Example 3: "racecar"', () => {
    expect(reverseString("racecar")).toBe("racecar");
});

test('Example 4: "dog"', () => {
    expect(reverseString("dog")).toBe("god");
});

// addUpToFirst test
test("addUpToFirst", () => {
  const start = performance.now();
  expect(addUpToFirst(5000)).toBe(12502500);
  const end = performance.now();
  console.log(`addUpToFirst Execution Time: ${(end - start).toFixed(3)}ms`);
});

// addUpToSecond test faster
test("addUpToSecond", () => {
  const start = performance.now();
  expect(addUpToSecond(5000)).toBe(12502500);
  const end = performance.now();
  console.log(`addUpToSecond Execution Time: ${(end - start).toFixed(3)}ms`);
});

// logAtLeast5 test
test("logAtLeast5", () => {
  const start = performance.now();
  logAtLeast5(5);
  const end = performance.now();
  console.log(`logAtLeast5 Execution Time: ${(end - start).toFixed(3)}ms`);
});

// logAtMost5 test
test("logAtMost5", () => {
  const start = performance.now();
  logAtMost5(5);
  const end = performance.now();
  console.log(`logAtMost5 Execution Time: ${(end - start).toFixed(3)}ms`);
});

// binarySearch test
test("binarySearch", () => {
  const start = performance.now();
  let arry = [1, 2, 3, 4, 5, 6, 7, 8];
  let starts = 0;
  let ends = arry.length - 1; // 7 index
  let target = 10;
  expect(binarySearch(arry, starts, ends, target)).toBe(false);
  const end = performance.now();
  console.log(`binarySearch Execution Time: ${(end - start).toFixed(3)}ms`);
});

// second test binarySearch
test("binarySearch", () => {
  const start = performance.now();
  let arry = [1, 2, 3, 4, 5, 6, 7, 8];
  let starts = 0;
  let ends = arry.length - 1; // 7 index
  let target = 5;
  expect(binarySearch(arry, starts, ends, target)).toBe(true);
  const end = performance.now();
  console.log(`binarySearch Execution Time: ${(end - start).toFixed(3)}ms`);
});

// mergeSort test
test("mergeSort", () => {
  const start = performance.now();
  let arry = [38, 27, 43, 3, 9, 82, 10];
  expect(mergeSort(arry)).toEqual([3, 9, 10, 27, 38, 43, 82]);
  const end = performance.now();
  console.log(`mergeSort Execution Time: ${(end - start).toFixed(3)}ms`);
});


// section 2 test file

// section 3 test file

// section 4 test file

// section 5 test file

// section 6 test file

// section 7 test file

// section 8 test file

// section 9 test file
