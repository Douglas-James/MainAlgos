// all the import down here
const {
  reverseString,
  addUpToFirst,
  addUpToSecond,
  logAtLeast5,
  logAtMost5,
  binarySearch,
  mergeSort,
  merge,
  charCount,
  sameFrequency,
  sameFrequencyCounter,
  areThereDuplicates,
  averagePair,
  collectOddValues,
  anagram,
  sumZero,
  maxSubarraySum,
  isSubsequence,
  minSubArrayLen,
  binarySearchs,
  findLongestSubstringSlidingWindow,
} = require('../index');
const { performance } = require('perf_hooks');

// section 1  test file
// // example test
// test('Example 1: "hello"', () => {
//   expect(reverseString('hello')).toBe('olleh');
// });

// test('Example 2: "world"', () => {
//   expect(reverseString('world')).toBe('dlrow');
// });

// test('Example 3: "racecar"', () => {
//   expect(reverseString('racecar')).toBe('racecar');
// });

// test('Example 4: "dog"', () => {
//   expect(reverseString('dog')).toBe('god');
// });

// // addUpToFirst test
// test('addUpToFirst', () => {
//   const start = performance.now();
//   expect(addUpToFirst(5000)).toBe(12502500);
//   const end = performance.now();
//   console.log(`addUpToFirst Execution Time: ${(end - start).toFixed(3)}ms`);
// });

// addUpToSecond test faster
// test('addUpToSecond', () => {
//   const start = performance.now();
//   expect(addUpToSecond(5000)).toBe(12502500);
//   const end = performance.now();
//   console.log(`addUpToSecond Execution Time: ${(end - start).toFixed(3)}ms`);
// });

// // logAtLeast5 test
// test('logAtLeast5', () => {
//   const start = performance.now();
//   logAtLeast5(5);
//   const end = performance.now();
//   console.log(`logAtLeast5 Execution Time: ${(end - start).toFixed(3)}ms`);
// });

// // logAtMost5 test
// test('logAtMost5', () => {
//   const start = performance.now();
//   logAtMost5(5);
//   const end = performance.now();
//   console.log(`logAtMost5 Execution Time: ${(end - start).toFixed(3)}ms`);
// });

// // binarySearch test
// test('binarySearch', () => {
//   const start = performance.now();
//   let arry = [1, 2, 3, 4, 5, 6, 7, 8];
//   let starts = 0;
//   let ends = arry.length - 1; // 7 index
//   let target = 10;
//   expect(binarySearch(arry, starts, ends, target)).toBe(false);
//   const end = performance.now();
//   console.log(`binarySearch Execution Time: ${(end - start).toFixed(3)}ms`);
// });

// // second test binarySearch
// test('binarySearch', () => {
//   const start = performance.now();
//   let arry = [1, 2, 3, 4, 5, 6, 7, 8];
//   let starts = 0;
//   let ends = arry.length - 1; // 7 index
//   let target = 5;
//   expect(binarySearch(arry, starts, ends, target)).toBe(true);
//   const end = performance.now();
//   console.log(`binarySearch Execution Time: ${(end - start).toFixed(3)}ms`);
// });

// example_b test
test('mergeSort', () => {
  const start = performance.now();
  let arry = [38, 27, 43, 3, 9, 82, 10];
  expect(mergeSort(arry)).toEqual([3, 9, 10, 27, 38, 43, 82]);
  const end = performance.now();
  console.log(`mergeSort Execution Time: ${(end - start).toFixed(3)}ms`);
});

// section 2 test file
// charCount test
test('charCount', () => {
  expect(charCount('Hello World')).toEqual({
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    w: 1,
    r: 1,
    d: 1,
  });
});

test('charCount', () => {
  expect(charCount('Hello World')).not.toEqual({
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    w: 1,
    r: 1,
    d: 2,
  });
});

// sameFrequency test
test('sameFrequency', () => {
  const start = performance.now();
  expect(sameFrequency([1, 2, 3], [4, 1, 9])).toBe(true);
  const end = performance.now();
  console.log(`sameFrequency Execution Time: ${(end - start).toFixed(3)}ms`);
});

test('sameFrequency', () => {
  const start = performance.now();
  expect(sameFrequency([1, 2, 3], [1, 9])).toBe(false);
  const end = performance.now();
  console.log(`sameFrequency Execution Time: ${(end - start).toFixed(3)}ms`);
});

test('sameFrequency', () => {
  const start = performance.now();
  expect(sameFrequency([1, 2, 1], [4, 4, 1])).toBe(false);
  const end = performance.now();
  console.log(`sameFrequency Execution Time: ${(end - start).toFixed(3)}ms`);
});

// collectOddValues test
test('collectOddValues', () => {
  const start = performance.now();
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(collectOddValues(array)).toEqual([1, 3, 5, 7, 9]);
  const end = performance.now();
  console.log(`collectOddValues Execution Time: ${(end - start).toFixed(3)}ms`);
});

// anagram test
test('anagram', () => {
  const start = performance.now();
  expect(anagram('hello', 'llohe')).toBe(true);
  const end = performance.now();
  console.log(`anagram Execution Time: ${(end - start).toFixed(3)}ms`);
});

test('anagram', () => {
  const start = performance.now();
  expect(anagram('car', 'rat')).toBe(false);
  const end = performance.now();
  console.log(`anagram Execution Time: ${(end - start).toFixed(3)}ms`);
});

test('anagram', () => {
  const start = performance.now();
  expect(anagram('', 'rac')).toBe(false);
  const end = performance.now();
  console.log(`anagram Execution Time: ${(end - start).toFixed(3)}ms`);
});

// sumZero test
test('sumZero', () => {
  const start = performance.now();
  expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
  const end = performance.now();
  console.log(`sumZero Execution Time: ${(end - start).toFixed(3)}ms`);
});

// maxSubarraySum test
test('maxSubarraySum', () => {
  const start = performance.now();
  expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
  const end = performance.now();
  console.log(`maxSubarraySum Execution Time: ${(end - start).toFixed(3)}ms`);
});

test('maxSubarraySum', () => {
  const start = performance.now();
  expect(maxSubarraySum([1, -1, 5, -2, 3], 3)).toBe(6);
  const end = performance.now();
  console.log(`maxSubarraySum Execution Time: ${(end - start).toFixed(3)}ms`);
});

test('maxSubarraySum', () => {
  const start = performance.now();
  expect(maxSubarraySum([1, 2, 3], 5)).toBe(null);
  const end = performance.now();
  console.log(`maxSubarraySum Execution Time: ${(end - start).toFixed(3)}ms`);
});

// binarySearchs test
test('binarySearchs', () => {
  const start = performance.now();
  let arry = [1, 2, 3, 4, 5, 6, 7, 8];
  expect(binarySearchs(arry, 7)).toBe(6);
  const end = performance.now();
  console.log(`binarySearchs Execution Time: ${(end - start).toFixed(3)}ms`);
});

// frequency counter test
test('sameFrequencyCounter', () => {
  const start = performance.now();
  expect(sameFrequencyCounter(182, 281)).toBe(true);
  const end = performance.now();
  console.log(
    `sameFrequencyCounter Execution Time: ${(end - start).toFixed(3)}ms`,
  );
});

test('sameFrequencyCounter', () => {
  const start = performance.now();
  expect(sameFrequencyCounter(34, 14)).toBe(false);
  const end = performance.now();
  console.log(
    `sameFrequencyCounter Execution Time: ${(end - start).toFixed(3)}ms`,
  );
});

test('sameFrequencyCounter', () => {
  const start = performance.now();
  expect(sameFrequencyCounter(3589578, 5879385)).toBe(true);
  const end = performance.now();
  console.log(
    `sameFrequencyCounter Execution Time: ${(end - start).toFixed(3)}ms`,
  );
});

test('sameFrequencyCounter', () => {
  const start = performance.now();
  expect(sameFrequencyCounter(22, 222)).toBe(false);
  const end = performance.now();
  console.log(
    `sameFrequencyCounter Execution Time: ${(end - start).toFixed(3)}ms`,
  );
});

// areThereDuplicates test
test('areThereDuplicates', () => {
  const start = performance.now();
  expect(areThereDuplicates(1, 2, 3)).toBe(false);
  const end = performance.now();
  console.log(
    `areThereDuplicates Execution Time: ${(end - start).toFixed(3)}ms`,
  );
});

test('areThereDuplicates', () => {
  const start = performance.now();
  expect(areThereDuplicates(1, 2, 2)).toBe(true);
  const end = performance.now();
  console.log(
    `areThereDuplicates Execution Time: ${(end - start).toFixed(3)}ms`,
  );
});

test('areThereDuplicates', () => {
  const start = performance.now();
  expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
  const end = performance.now();
  console.log(
    `areThereDuplicates Execution Time: ${(end - start).toFixed(3)}ms`,
  );
});

// averagePair test
test('averagePair', () => {
  const start = performance.now();
  expect(averagePair([1, 2, 3], 2.5)).toBe(true);
  const end = performance.now();
  console.log(`averagePair Execution Time: ${(end - start).toFixed(3)}ms`);
});

test('averagePair', () => {
  const start = performance.now();
  expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
  const end = performance.now();
  console.log(`averagePair Execution Time: ${(end - start).toFixed(3)}ms`);
});

test('averagePair', () => {
  const start = performance.now();
  expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
  const end = performance.now();
  console.log(`averagePair Execution Time: ${(end - start).toFixed(3)}ms`);
});

test('averagePair', () => {
  const start = performance.now();
  expect(averagePair([], 4)).toBe(false);
  const end = performance.now();
  console.log(`averagePair Execution Time: ${(end - start).toFixed(3)}ms`);
});

// minSubArrayLen test
test('minSubArrayLen', () => {
  const start = performance.now();
  expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
  const end = performance.now();
  console.log(`minSubArrayLen Execution Time: ${(end - start).toFixed(3)}ms`);
});

test('minSubArrayLen', () => {
  const start = performance.now();
  expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
  const end = performance.now();
  console.log(`minSubArrayLen Execution Time: ${(end - start).toFixed(3)}ms`);
});

test('minSubArrayLen', () => {
  const start = performance.now();
  expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1);
  const end = performance.now();
  console.log(`minSubArrayLen Execution Time: ${(end - start).toFixed(3)}ms`);
});

// isSubsequence test
test('isSubsequence', () => {
  const start = performance.now();
  expect(isSubsequence('hello', 'hello world')).toBe(true);
  const end = performance.now();
  console.log(`isSubsequence Execution Time: ${(end - start).toFixed(3)}ms`);
});

test('isSubsequence', () => {
  const start = performance.now();
  expect(isSubsequence('sing', 'sting')).toBe(true);
  const end = performance.now();
  console.log(`isSubsequence Execution Time: ${(end - start).toFixed(3)}ms`);
});

test('isSubsequence', () => {
  const start = performance.now();
  expect(isSubsequence('abc', 'acb')).toBe(false);
  const end = performance.now();
  console.log(`isSubsequence Execution Time: ${(end - start).toFixed(3)}ms`);
});

// find longest substring test
test('findLongestSubstringSlidingWindow', () => {
  const start = performance.now();
  expect(findLongestSubstringSlidingWindow('')).toBe(0);
  const end = performance.now();
  console.log(
    `findLongestSubstringSlidingWindow Execution Time: ${(end - start).toFixed(
      3,
    )}ms`,
  );
});

test('findLongestSubstringSlidingWindow', () => {
  const start = performance.now();
  expect(findLongestSubstringSlidingWindow('rithmschool')).toBe(7);
  const end = performance.now();
  console.log(
    `findLongestSubstringSlidingWindow Execution Time: ${(end - start).toFixed(
      3,
    )}ms`,
  );
});

test('findLongestSubstringSlidingWindow', () => {
  const start = performance.now();
  expect(findLongestSubstringSlidingWindow('longestsubstring')).toBe(8);
  const end = performance.now();
  console.log(
    `findLongestSubstringSlidingWindow Execution Time: ${(end - start).toFixed(
      3,
    )}ms`,
  );
});

// section 3 test file

// section 4 test file

// section 5 test file

// section 6 test file

// section 7 test file

// section 8 test file

// section 9 test file
