/*
================================================================
Author: @Douglas-James
Date: 2023-10-01
Description: This file contains unit tests for various algorithms
================================================================
*/
const {
  anagram,
  averagePair,
  charCount,
  findLongestSubstring,
  findLongestSubstringSlidingWindow,
  isSubsequence,
  isSubsequenceRecursive,
  maxSubarraySum,
  minSubArrayLen,
  sameFrequency,
  sameFrequencyCounter,
  areThereDuplicates,
  fib,
  factorial,
  isPalindrome,
  nestedEvenSum,
  reverse,
  stringifyNumbers,
  naiveStringSearch,
  recursiveStringSearch,
  binarySearchs,
  linearSearch,
  bubbleSortOptimized,
  bubbleSortUnoptimized,
  quickSort,
  bubbleSortObj,
} = require("../index");
const { performance } = require("perf_hooks");

// anagram tests
test("anagram", () => {
  const start = performance.now();
  expect(anagram("hello", "llohe")).toBe(true);
  const end = performance.now();
  console.log(`anagram Execution Time: ${(end - start).toFixed(3)}ms`);
});

test("anagram", () => {
  const start = performance.now();
  expect(anagram("car", "rat")).toBe(false);
  const end = performance.now();
  console.log(`anagram Execution Time: ${(end - start).toFixed(3)}ms`);
});

// averagePair tests
test("averagePair", () => {
  const start = performance.now();
  expect(averagePair([1, 2, 3], 2.5)).toBe(true);
  const end = performance.now();
  console.log(`averagePair Execution Time: ${(end - start).toFixed(3)}ms`);
});
test("averagePair", () => {
  const start = performance.now();
  expect(averagePair([1, 2, 3], 3)).toBe(false);
  const end = performance.now();
  console.log(`averagePair Execution Time: ${(end - start).toFixed(3)}ms`);
});
// charCount tests
test("charCount", () => {
  const start = performance.now();
  expect(charCount("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
  const end = performance.now();
  console.log(`charCount Execution Time: ${(end - start).toFixed(3)}ms`);
});
test("charCount", () => {
  const start = performance.now();
  expect(charCount("")).toEqual({});
  const end = performance.now();
  console.log(`charCount Execution Time: ${(end - start).toFixed(3)}ms`);
});
// findLongestSubstring tests
test("findLongestSubstring", () => {
  const start = performance.now();
  expect(findLongestSubstring("abcabcbb")).toBe(3);
  const end = performance.now();
  console.log(
    `findLongestSubstring Execution Time: ${(end - start).toFixed(3)}ms`
  );
});
test("findLongestSubstring", () => {
  const start = performance.now();
  expect(findLongestSubstring("bbbbb")).toBe(1);
  const end = performance.now();
  console.log(
    `findLongestSubstring Execution Time: ${(end - start).toFixed(3)}ms`
  );
});
// findLongestSubstringSlidingWindow tests
test("findLongestSubstringSlidingWindow", () => {
  const start = performance.now();
  expect(findLongestSubstringSlidingWindow("abcabcbb")).toBe(3);
  const end = performance.now();
  console.log(
    `findLongestSubstringSlidingWindow Execution Time: ${(end - start).toFixed(
      3
    )}ms`
  );
});
test("findLongestSubstringSlidingWindow", () => {
  const start = performance.now();
  expect(findLongestSubstringSlidingWindow("bbbbb")).toBe(1);
  const end = performance.now();
  console.log(
    `findLongestSubstringSlidingWindow Execution Time: ${(end - start).toFixed(
      3
    )}ms`
  );
});
// isSubsequence tests
test("isSubsequence", () => {
  const start = performance.now();
  expect(isSubsequence("abc", "ahbgdc")).toBe(true);
  const end = performance.now();
  console.log(`isSubsequence Execution Time: ${(end - start).toFixed(3)}ms`);
});
test("isSubsequence", () => {
  const start = performance.now();
  expect(isSubsequence("abc", "acb")).toBe(false);
  const end = performance.now();
  console.log(`isSubsequence Execution Time: ${(end - start).toFixed(3)}ms`);
});
// isSubsequenceRecursive tests
test("isSubsequenceRecursive", () => {
  const start = performance.now();
  expect(isSubsequenceRecursive("abc", "ahbgdc")).toBe(true);
  const end = performance.now();
  console.log(
    `isSubsequenceRecursive Execution Time: ${(end - start).toFixed(3)}ms`
  );
});
test("isSubsequenceRecursive", () => {
  const start = performance.now();
  expect(isSubsequenceRecursive("abc", "acb")).toBe(false);
  const end = performance.now();
  console.log(
    `isSubsequenceRecursive Execution Time: ${(end - start).toFixed(3)}ms`
  );
});
// minSubArrayLen test
test("minSubArrayLen", () => {
  const start = performance.now();
  expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
  const end = performance.now();
  console.log(`minSubArrayLen Execution Time: ${(end - start).toFixed(3)}ms`);
});

test("minSubArrayLen", () => {
  const start = performance.now();
  expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
  const end = performance.now();
  console.log(`minSubArrayLen Execution Time: ${(end - start).toFixed(3)}ms`);
});
// maxSubarraySum tests
test("maxSubarraySum", () => {
  const start = performance.now();
  expect(maxSubarraySum([1, 2, 3, 4, 5], 2)).toBe(9);
  const end = performance.now();
  console.log(`maxSubarraySum Execution Time: ${(end - start).toFixed(3)}ms`);
});
test("maxSubarraySum", () => {
  const start = performance.now();
  expect(maxSubarraySum([1, 2, 3, 4, 5], 3)).toBe(12);
  const end = performance.now();
  console.log(`maxSubarraySum Execution Time: ${(end - start).toFixed(3)}ms`);
});
// sameFrequency tests
test("sameFrequency", () => {
  const start = performance.now();
  expect(sameFrequency([1, 2, 3], [4, 1, 9])).toBe(true);
  const end = performance.now();
  console.log(`sameFrequency Execution Time: ${(end - start).toFixed(3)}ms`);
});
test("sameFrequency", () => {
  const start = performance.now();
  expect(sameFrequency([1, 2, 3], [1, 9])).toBe(false);
  const end = performance.now();
  console.log(`sameFrequency Execution Time: ${(end - start).toFixed(3)}ms`);
});

// sameFrequencyCounter tests
test("sameFrequencyCounter", () => {
  const start = performance.now();
  expect(sameFrequencyCounter(182, 281)).toBe(true);
  const end = performance.now();
  console.log(
    `sameFrequencyCounter Execution Time: ${(end - start).toFixed(3)}ms`
  );
});

test("sameFrequencyCounter", () => {
  const start = performance.now();
  expect(sameFrequencyCounter(34, 14)).toBe(false);
  const end = performance.now();
  console.log(
    `sameFrequencyCounter Execution Time: ${(end - start).toFixed(3)}ms`
  );
});
// areThereDuplicates tests
test("areThereDuplicates", () => {
  const start = performance.now();
  expect(areThereDuplicates(1, 2, 2)).toBe(true);
  const end = performance.now();
  console.log(
    `areThereDuplicates Execution Time: ${(end - start).toFixed(3)}ms`
  );
});

test("areThereDuplicates", () => {
  const start = performance.now();
  expect(areThereDuplicates("a", "b", "c", "a")).toBe(true);
  const end = performance.now();
  console.log(
    `areThereDuplicates Execution Time: ${(end - start).toFixed(3)}ms`
  );
});

// fib test
test("fib", () => {
  const start = performance.now();
  expect(fib(4)).toBe(3);
  const end = performance.now();
  console.log(`fib Execution Time: ${(end - start).toFixed(3)}ms`);
});
test("fib", () => {
  const start = performance.now();
  expect(fib(6)).toBe(8);
  const end = performance.now();
  console.log(`fib Execution Time: ${(end - start).toFixed(3)}ms`);
});
// factorial test
test("factorial", () => {
  const start = performance.now();
  expect(factorial(5)).toBe(120);
  const end = performance.now();
  console.log(`factorial Execution Time: ${(end - start).toFixed(3)}ms`);
});
// isPalindrome test
test("isPalindrome", () => {
  const start = performance.now();
  expect(isPalindrome("racecar")).toBe(true);
  const end = performance.now();
  console.log(`isPalindrome Execution Time: ${(end - start).toFixed(3)}ms`);
});
test("isPalindrome", () => {
  const start = performance.now();
  expect(isPalindrome("hello")).toBe(false);
  const end = performance.now();
  console.log(`isPalindrome Execution Time: ${(end - start).toFixed(3)}ms`);
});
// nestedEvenSum test
test("nestedEvenSum", () => {
  const start = performance.now();
  const obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  };
  expect(nestedEvenSum(obj1)).toBe(6);
  const end = performance.now();
  console.log(`nestedEvenSum Execution Time: ${(end - start).toFixed(3)}ms`);
});
test("nestedEvenSum", () => {
  const start = performance.now();
  const obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
  };
  expect(nestedEvenSum(obj2)).toBe(10);
  const end = performance.now();
  console.log(`nestedEvenSum Execution Time: ${(end - start).toFixed(3)}ms`);
});
// reverse test
test("reverse", () => {
  const start = performance.now();
  expect(reverse("hello")).toBe("olleh");
  const end = performance.now();
  console.log(`reverse Execution Time: ${(end - start).toFixed(3)}ms`);
});
test("reverse", () => {
  const start = performance.now();
  expect(reverse("")).toBe("");
  const end = performance.now();
  console.log(`reverse Execution Time: ${(end - start).toFixed(3)}ms`);
});
// stringifyNumbers test
test("stringifyNumbers", () => {
  const start = performance.now();
  expect(
    stringifyNumbers({
      num: 1,
      test: [],
      data: {
        val: 4,
        info: {
          isRight: true,
          random: 66,
        },
      },
    })
  ).toEqual({
    num: "1",
    test: [],
    data: {
      val: "4",
      info: {
        isRight: true,
        random: "66",
      },
    },
  });
  const end = performance.now();
  console.log(`stringifyNumbers Execution Time: ${(end - start).toFixed(3)}ms`);
});

// naiveStringSearch test
test("naiveStringSearch", () => {
  const start = performance.now();
  expect(naiveStringSearch("momagaagshksdakaf", "ga")).toBe(1);
  const end = performance.now();
  console.log(
    `naiveStringSearch Execution Time: ${(end - start).toFixed(3)}ms`
  );
});
test("naiveStringSearch", () => {
  const start = performance.now();
  expect(naiveStringSearch("momagaagshksdakaf", "ga")).not.toBe(2);
  const end = performance.now();
  console.log(
    `naiveStringSearch Execution Time: ${(end - start).toFixed(3)}ms`
  );
});
// recursiveStringSearch test
test("recursiveStringSearch", () => {
  const start = performance.now();
  expect(recursiveStringSearch("momagaagshksdakaf", "ga")).toBe(1);
  const end = performance.now();
  console.log(
    `recursiveStringSearch Execution Time: ${(end - start).toFixed(3)}ms`
  );
});
test("recursiveStringSearch", () => {
  const start = performance.now();
  expect(recursiveStringSearch("momagaagshksdakaf", "ga")).not.toBe(2);
  const end = performance.now();
  console.log(
    `recursiveStringSearch Execution Time: ${(end - start).toFixed(3)}ms`
  );
});
// binarySearchs test
test("binarySearchs", () => {
  const start = performance.now();
  let arry = [1, 2, 3, 4, 5, 6, 7, 8];
  expect(binarySearchs(arry, 7)).toBe(6);
  const end = performance.now();
  console.log(`binarySearchs Execution Time: ${(end - start).toFixed(3)}ms`);
});
// linearSearch test
test("linearSearch", () => {
  const start = performance.now();
  let arry = [1, 2, 3, 4, 5, 6, 7, 8];
  expect(linearSearch(arry, 10)).toBe(-1);
  const end = performance.now();
  console.log(`linearSearch Execution Time: ${(end - start).toFixed(3)}ms`);
});

test("linearSearch", () => {
  const start = performance.now();
  let arry = [1, 2, 3, 4, 5, 6, 7, 8];
  expect(linearSearch(arry, 5)).toBe(4);
  const end = performance.now();
  console.log(`linearSearch Execution Time: ${(end - start).toFixed(3)}ms`);
});

// bubbleSortOptimized test
test("bubbleSortOptimized", () => {
  const start = performance.now();
  expect(bubbleSortOptimized([5, 3, 8, 4, 2, -1])).toEqual([-1, 2, 3, 4, 5, 8]);
  const end = performance.now();
  console.log(
    `bubbleSortOptimized Execution Time: ${(end - start).toFixed(3)}ms`
  );
});
test("bubbleSortOptimized", () => {
  const start = performance.now();
  expect(bubbleSortOptimized([8, 1, 2, 3, 4, 5, 6, 7])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);
  const end = performance.now();
  console.log(
    `bubbleSortOptimized Execution Time: ${(end - start).toFixed(3)}ms`
  );
});

// bubbleSort_unoptimized test
test("bubbleSortUnoptimized", () => {
  const start = performance.now();
  expect(bubbleSortUnoptimized([5, 3, 8, 4, 2, -1])).toEqual([
    -1, 2, 3, 4, 5, 8,
  ]);
  const end = performance.now();
  console.log(
    `bubbleSortUnoptimized Execution Time: ${(end - start).toFixed(3)}ms`
  );
});

test("bubbleSortUnoptimized", () => {
  const start = performance.now();
  expect(bubbleSortUnoptimized([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  const end = performance.now();
  console.log(
    `bubbleSortUnoptimized Execution Time: ${(end - start).toFixed(3)}ms`
  );
});

// quickSort test
test("quickSort", () => {
  const start = performance.now();
  expect(quickSort([5, 4, 3, 2, 1, -3, 0])).toEqual([-3, 0, 1, 2, 3, 4, 5]);
  const end = performance.now();
  console.log(`quickSort Execution Time: ${(end - start).toFixed(3)}ms`);
});

test("quickSort", () => {
  const start = performance.now();
  expect(quickSort([10, 7, 8, 9, 1, 5])).toEqual([1, 5, 7, 8, 9, 10]);
  const end = performance.now();
  console.log(`quickSort Execution Time: ${(end - start).toFixed(3)}ms`);
});

// bubbleSortObj test
test("bubbleSortObj", () => {
  const start = performance.now();
  const moarKittyData = [
    { name: "LilBub", age: 7 },
    { name: "Garfield", age: 40 },
    { name: "Heathcliff", age: 45 },
    { name: "Blue", age: 1 },
    { name: "Grumpy", age: 6 },
  ];

  expect(bubbleSortObj(moarKittyData, "age")).toEqual([
    { name: "Blue", age: 1 },
    { name: "Grumpy", age: 6 },
    { name: "LilBub", age: 7 },
    { name: "Garfield", age: 40 },
    { name: "Heathcliff", age: 45 },
  ]);

  const end = performance.now();
  console.log(`bubbleSortObj Execution Time: ${(end - start).toFixed(3)}ms`);
});
test("bubbleSortObj", () => {
  const start = performance.now();
  const obj = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 20 },
  ];
  expect(bubbleSortObj(obj, "age")).toEqual([
    { name: "David", age: 20 },
    { name: "Bob", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Charlie", age: 35 },
  ]);
  const end = performance.now();
  console.log(`bubbleSortObj Execution Time: ${(end - start).toFixed(3)}ms`);
});

// selectionSort test
// test("selectionSort", () => {
//   const start = performance.now();
//   expect(selectionSort([5, 3, 8, 4, 2, -1])).toEqual([-1, 2, 3, 4, 5, 8]);
//   const end = performance.now();
//   console.log(`selectionSort Execution Time: ${(end - start).toFixed(3)}ms`);
// });
// test("selectionSort", () => {
//   const start = performance.now();
//   expect(selectionSort([8, 1, 2, 3, 4, 5, 6, 7])).toEqual([
//     1, 2, 3, 4, 5, 6, 7, 8,
//   ]);
//   const end = performance.now();
//   console.log(`selectionSort Execution Time: ${(end - start).toFixed(3)}ms`);
// });
