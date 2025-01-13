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
  averagePair,
} = require('./section-2/sameFrequency');
const { collectOddValues } = require('./section-2/collect_values');
const { anagram } = require('./section-2/anagram');
const { sumZero } = require('./section-2/sum_zero');
const { maxSubarraySum, minSubArrayLen } = require('./section-2/max_sum');
const { binarySearchs } = require('./section-2/divide_conquer');

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
  collectOddValues,
  anagram,
  sumZero,
  maxSubarraySum,
  minSubArrayLen,
  binarySearchs,
  // section 3
  // section 4
  // section 5
  // section 6
  // section 7
  // section 8
  // section 9
};
