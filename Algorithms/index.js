// section 1
const { binarySearch } = require('./section-1/example_a');
const { mergeSort, merge } = require('./section-1/example_b');
const {
  reverseString,
  addUpToFirst,
  addUpToSecond,
  logAtLeast5,
  logAtMost5,
} = require('./section-1/example');

// section 2
const { charCount } = require('./section-2/charCount');
const {
  sameFrequency,
  sameFrequencyCounter,
  areThereDuplicates,
} = require('./section-2/sameFrequency');
const { collectOddValues } = require('./section-2/recursive/helperRecursion');
const { anagram } = require('./section-2/anagram');
const { sumZero } = require('./section-2/sum_zero');
const { maxSubarraySum, minSubArrayLen } = require('./section-2/max_sum');
const { binarySearchs } = require('./section-2/divide_conquer');
const { averagePair } = require('./section-2/averagePair');
const { isSubsequence } = require('./section-2/isSubsequnce');
const {
  findLongestSubstring,
  findLongestSubstringSlidingWindow,
} = require('./section-2/findLongestSubstring');
const { factorial } = require('./section-2/recursive/factorial');
const { productOfArray } = require('./section-2/recursive/product');
const { recursiveRange } = require('./section-2/recursive/recursive_range');
const { fib } = require('./section-2/recursive/fib');
const { reverse } = require('./section-2/recursive/reverse_string');
const { isPalindrome } = require('./section-2/recursive/isPalindrome');
const { someRecursive } = require('./section-2/recursive/some_recursive');
const { flatten } = require('./section-2/recursive/flatten');
const { capitalizeFirst } = require('./section-2/recursive/capitalizeFirst');
const { nestedEvenSum } = require('./section-2/recursive/nestedEvenSum');
const { capitalizeWords } = require('./section-2/recursive/capitalizeWords');
const { stringifyNumbers } = require('./section-2/recursive/stringifyNumber');
const { collectStrings } = require('./section-2/recursive/collectStrings');
const { linearSearch } = require('./section-2/Search/linear_search');
const { mainBinarySearch } = require('./section-2/Search/binary_search');
// section 3

// section 4

// section 5

// section 6

// section 7

// section 8

// section 9

// export all that into one object to be used in the test folder for testing
module.exports = {
  // section 1
  reverseString,
  addUpToFirst,
  addUpToSecond,
  logAtLeast5,
  logAtMost5,
  binarySearch,
  mergeSort,
  merge,
  // section 2
  charCount,
  sameFrequency,
  sameFrequencyCounter,
  areThereDuplicates,
  averagePair,
  isSubsequence,
  collectOddValues,
  anagram,
  sumZero,
  maxSubarraySum,
  minSubArrayLen,
  binarySearchs,
  findLongestSubstringSlidingWindow,
  factorial,
  productOfArray,
  recursiveRange,
  fib,
  reverse,
  isPalindrome,
  someRecursive,
  flatten,
  capitalizeFirst,
  nestedEvenSum,
  capitalizeWords,
  stringifyNumbers,
  collectStrings,
  linearSearch,
  mainBinarySearch,
  // section 3
  // section 4
  // section 5
  // section 6
  // section 7
  // section 8
  // section 9
};
