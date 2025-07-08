/*
================================================================
Author: @Douglas-James
Date: 2023-10-01
Description: Unit tests for various algorithms
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
  bubbleSortObj,
  selectionSort,
  selectionSortObj,
  insertionSort,
  insertionSortObj,
  merge,
  mergeSort,
  pivot,
  quickSort,
  radixSort,
  heapSort,
  shellSort,
} = require("../index");
const { performance } = require("perf_hooks");

function timedTest(name, fn) {
  test(name, () => {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} Execution Time: ${(end - start).toFixed(3)}ms`);
  });
}

// anagram tests
timedTest("anagram true", () => {
  expect(anagram("hello", "llohe")).toBe(true);
});
timedTest("anagram false", () => {
  expect(anagram("car", "rat")).toBe(false);
});

// averagePair tests
timedTest("averagePair true", () => {
  expect(averagePair([1, 2, 3], 2.5)).toBe(true);
});
timedTest("averagePair false", () => {
  expect(averagePair([1, 2, 3], 3)).toBe(false);
});

// charCount tests
timedTest("charCount hello", () => {
  expect(charCount("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
});
timedTest("charCount empty", () => {
  expect(charCount("")).toEqual({});
});

// findLongestSubstring tests
timedTest("findLongestSubstring abcabcbb", () => {
  expect(findLongestSubstring("abcabcbb")).toBe(3);
});
timedTest("findLongestSubstring bbbbb", () => {
  expect(findLongestSubstring("bbbbb")).toBe(1);
});

// findLongestSubstringSlidingWindow tests
timedTest("findLongestSubstringSlidingWindow abcabcbb", () => {
  expect(findLongestSubstringSlidingWindow("abcabcbb")).toBe(3);
});
timedTest("findLongestSubstringSlidingWindow bbbbb", () => {
  expect(findLongestSubstringSlidingWindow("bbbbb")).toBe(1);
});

// isSubsequence tests
timedTest("isSubsequence true", () => {
  expect(isSubsequence("abc", "ahbgdc")).toBe(true);
});
timedTest("isSubsequence false", () => {
  expect(isSubsequence("abc", "acb")).toBe(false);
});

// isSubsequenceRecursive tests
timedTest("isSubsequenceRecursive true", () => {
  expect(isSubsequenceRecursive("abc", "ahbgdc")).toBe(true);
});
timedTest("isSubsequenceRecursive false", () => {
  expect(isSubsequenceRecursive("abc", "acb")).toBe(false);
});

// minSubArrayLen tests
timedTest("minSubArrayLen [2,3,1,2,4,3], 7", () => {
  expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
});
timedTest("minSubArrayLen [2,1,6,5,4], 9", () => {
  expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
});

// maxSubarraySum tests
timedTest("maxSubarraySum [1,2,3,4,5], 2", () => {
  expect(maxSubarraySum([1, 2, 3, 4, 5], 2)).toBe(9);
});
timedTest("maxSubarraySum [1,2,3,4,5], 3", () => {
  expect(maxSubarraySum([1, 2, 3, 4, 5], 3)).toBe(12);
});

// sameFrequency tests
timedTest("sameFrequency true", () => {
  expect(sameFrequency([1, 2, 3], [4, 1, 9])).toBe(true);
});
timedTest("sameFrequency false", () => {
  expect(sameFrequency([1, 2, 3], [1, 9])).toBe(false);
});

// sameFrequencyCounter tests
timedTest("sameFrequencyCounter true", () => {
  expect(sameFrequencyCounter(182, 281)).toBe(true);
});
timedTest("sameFrequencyCounter false", () => {
  expect(sameFrequencyCounter(34, 14)).toBe(false);
});

// areThereDuplicates tests
timedTest("areThereDuplicates numbers", () => {
  expect(areThereDuplicates(1, 2, 2)).toBe(true);
});
timedTest("areThereDuplicates strings", () => {
  expect(areThereDuplicates("a", "b", "c", "a")).toBe(true);
});

// fib tests
timedTest("fib 4", () => {
  expect(fib(4)).toBe(3);
});
timedTest("fib 6", () => {
  expect(fib(6)).toBe(8);
});

// factorial test
timedTest("factorial 5", () => {
  expect(factorial(5)).toBe(120);
});

// isPalindrome tests
timedTest("isPalindrome true", () => {
  expect(isPalindrome("racecar")).toBe(true);
});
timedTest("isPalindrome false", () => {
  expect(isPalindrome("hello")).toBe(false);
});

// nestedEvenSum tests
timedTest("nestedEvenSum obj1", () => {
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
});
timedTest("nestedEvenSum obj2", () => {
  const obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
  };
  expect(nestedEvenSum(obj2)).toBe(10);
});

// reverse tests
timedTest("reverse hello", () => {
  expect(reverse("hello")).toBe("olleh");
});
timedTest("reverse empty", () => {
  expect(reverse("")).toBe("");
});

// stringifyNumbers test
timedTest("stringifyNumbers", () => {
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
});

// naiveStringSearch tests
timedTest("naiveStringSearch 1", () => {
  expect(naiveStringSearch("momagaagshksdakaf", "ga")).toBe(1);
});
timedTest("naiveStringSearch not 2", () => {
  expect(naiveStringSearch("momagaagshksdakaf", "ga")).not.toBe(2);
});

// recursiveStringSearch tests
timedTest("recursiveStringSearch 1", () => {
  expect(recursiveStringSearch("momagaagshksdakaf", "ga")).toBe(1);
});
timedTest("recursiveStringSearch not 2", () => {
  expect(recursiveStringSearch("momagaagshksdakaf", "ga")).not.toBe(2);
});

// binarySearchs test
timedTest("binarySearchs 7", () => {
  let arry = [1, 2, 3, 4, 5, 6, 7, 8];
  expect(binarySearchs(arry, 7)).toBe(6);
});

// linearSearch tests
timedTest("linearSearch -1", () => {
  let arry = [1, 2, 3, 4, 5, 6, 7, 8];
  expect(linearSearch(arry, 10)).toBe(-1);
});
timedTest("linearSearch 5", () => {
  let arry = [1, 2, 3, 4, 5, 6, 7, 8];
  expect(linearSearch(arry, 5)).toBe(4);
});

// bubbleSortOptimized tests
timedTest("bubbleSortOptimized mixed", () => {
  expect(bubbleSortOptimized([5, 3, 8, 4, 2, -1])).toEqual([-1, 2, 3, 4, 5, 8]);
});
timedTest("bubbleSortOptimized sorted", () => {
  expect(bubbleSortOptimized([8, 1, 2, 3, 4, 5, 6, 7])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);
});

// bubbleSortUnoptimized tests
timedTest("bubbleSortUnoptimized mixed", () => {
  expect(bubbleSortUnoptimized([5, 3, 8, 4, 2, -1])).toEqual([
    -1, 2, 3, 4, 5, 8,
  ]);
});
timedTest("bubbleSortUnoptimized reverse", () => {
  expect(bubbleSortUnoptimized([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

// quickSort tests
timedTest("quickSort mixed", () => {
  expect(quickSort([5, 4, 3, 2, 1, -3, 0])).toEqual([-3, 0, 1, 2, 3, 4, 5]);
});
timedTest("quickSort more", () => {
  expect(quickSort([10, 7, 8, 9, 1, 5])).toEqual([1, 5, 7, 8, 9, 10]);
});

// bubbleSortObj tests
timedTest("bubbleSortObj moarKittyData", () => {
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
});
timedTest("bubbleSortObj people", () => {
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
});

// selectionSort tests
timedTest("selectionSort mixed", () => {
  expect(selectionSort([5, 3, 8, 4, 2, -1])).toEqual([-1, 2, 3, 4, 5, 8]);
});
timedTest("selectionSort sorted", () => {
  expect(selectionSort([8, 1, 2, 3, 4, 5, 6, 7])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);
});

// selectionSortObj tests
timedTest("selectionSortObj moarKittyData", () => {
  const moarKittyData = [
    { name: "LilBub", age: 7 },
    { name: "Garfield", age: 40 },
    { name: "Heathcliff", age: 45 },
    { name: "Blue", age: 1 },
    { name: "Grumpy", age: 6 },
  ];
  expect(selectionSortObj(moarKittyData, "age")).toEqual([
    { name: "Blue", age: 1 },
    { name: "Grumpy", age: 6 },
    { name: "LilBub", age: 7 },
    { name: "Garfield", age: 40 },
    { name: "Heathcliff", age: 45 },
  ]);
});
timedTest("selectionSortObj people", () => {
  const obj = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 20 },
  ];
  expect(selectionSortObj(obj, "age")).toEqual([
    { name: "David", age: 20 },
    { name: "Bob", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Charlie", age: 35 },
  ]);
});

// insertionSort tests
timedTest("insertionSort [2,1,9,76,4]", () => {
  expect(insertionSort([2, 1, 9, 76, 4])).toEqual([1, 2, 4, 9, 76]);
});
timedTest("insertionSort [4,2,82,42,15,9]", () => {
  expect(insertionSort([4, 2, 82, 42, 15, 9])).toEqual([2, 4, 9, 15, 42, 82]);
});

// insertionSortObj tests
timedTest("insertionSortObj by age", () => {
  const input = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 20 },
  ];
  const expected = [
    { name: "David", age: 20 },
    { name: "Bob", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  expect(insertionSortObj(input, "age")).toEqual(expected);
});
timedTest("insertionSortObj ages only", () => {
  const input = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 20 },
  ];
  const sorted = insertionSortObj(input, "age");
  const agesOnly = sorted.map(({ age }) => age);
  expect(agesOnly).toEqual([20, 25, 30, 35]);
});

// merge tests
timedTest("merge [100,200] [1,2,3,5,6]", () => {
  expect(merge([100, 200], [1, 2, 3, 5, 6])).toEqual([1, 2, 3, 5, 6, 100, 200]);
});
timedTest("merge [29,38,40] [0,10,15,16,19,20]", () => {
  expect(merge([29, 38, 40], [0, 10, 15, 16, 19, 20])).toEqual([
    0, 10, 15, 16, 19, 20, 29, 38, 40,
  ]);
});

// mergeSort tests
timedTest("mergeSort [10,2,5,3,1]", () => {
  expect(mergeSort([10, 2, 5, 3, 1])).toEqual([1, 2, 3, 5, 10]);
});
timedTest("mergeSort [30,1,-1,59,29,39,10,9,8,7]", () => {
  expect(mergeSort([30, 1, -1, 59, 29, 39, 10, 9, 8, 7])).toEqual([
    -1, 1, 7, 8, 9, 10, 29, 30, 39, 59,
  ]);
});

// pivot test
timedTest("pivot [4,8,2,1,4,7,6,3]", () => {
  expect(pivot([4, 8, 2, 1, 4, 7, 6, 3])).toEqual(3);
});

// quickSort more tests
timedTest("quickSort [4,6,1,7,3,2,5]", () => {
  expect(quickSort([4, 6, 1, 7, 3, 2, 5])).toEqual([1, 2, 3, 4, 5, 6, 7]);
});
timedTest("quickSort [10,-1,2,0,9,1,11,3,8]", () => {
  expect(quickSort([10, -1, 2, 0, 9, 1, 11, 3, 8])).toEqual([
    -1, 0, 1, 2, 3, 8, 9, 10, 11,
  ]);
});

// radixSort test
timedTest("radixSort [23,345,5467,12,2345,9852]", () => {
  expect(radixSort([23, 345, 5467, 12, 2345, 9852])).toEqual([
    12, 23, 345, 2345, 5467, 9852,
  ]);
});
timedTest("radixSort [1,2,3,4,0]", () => {
  expect(radixSort([1, 2, 3, 4, 0])).toEqual([0, 1, 2, 3, 4]);
});
// heap sort tests
timedTest("heapSort [1,3,5,7,9,2,4,6,8,0]", () => {
  expect(heapSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0])).toEqual([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
});
timedTest("heapSort [10,9,8,7,6,5,4,3,2,1]", () => {
  expect(heapSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
});

// shell sort tests
timedTest("shelSort [10,9,8,7,6,5,4,3,2,1]", () => {
  expect(shellSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
});

timedTest("shellSort [10,9,8,7,6,5,4,3,2,1]", () => {
  expect(shellSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
});
