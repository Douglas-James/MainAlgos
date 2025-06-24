// 50 States of the United States of America randomly ordered in an array
const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

// write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.
// Do not use indexOf to implement this function!
// Time complexity: O(n)

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
};

const randomState = states[Math.floor(Math.random() * states.length)]; // randomly select a state from the states array
// console.log(states[states.indexOf(randomState)]); // print the randomly selected state
// console.log(linearSearch(states, randomState));
// console.log(linearSearch(states, 'California')); // 4

// we have array of letters from a to h
/**
 * An array of characters used for demonstrating linear search algorithms.
 *
 * This array contains the characters from 'a' to 'h' and is used to illustrate
 * how linear search works. Linear search is a simple search algorithm that
 * checks each element in the array sequentially until the desired element is found
 * or the end of the array is reached. The time complexity of linear search is O(n),
 */
let a_h = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// we can use the build functions indexOf to find the index of the letter 'e'
// console.log(a_h.indexOf('e')); // 4

// // we can use the build function findIndex to find the index of the letter 'e'
// console.log(a_h.findIndex((letter) => letter === 'e')); // 4

// // we can use the build function find to find the letter 'e' in the array.
// console.log(a_h.find((letter) => letter === 'e')); // e

// // we can use the build function includes to find the letter 'e'
// console.log(a_h.includes('e')); // true or false

// export the function to be used in the test file
module.exports = linearSearch
