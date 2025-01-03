/*
* Write a function called sameFrequency, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
*/

const sameFrequency = (arr1, arr2) => {
  // if the length of the arrays are not the same, return false
  if(arr1.length !== arr2.length) return false;
  // create two objects to store the frequency of the values in the arrays
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // loop through the first array and store the frequency of the values in the first object
  for(let val of arr1){
    // if the value is not in the object, add it and set it to 1, else increment the value by 1
    if(frequencyCounter1[val]){
      frequencyCounter1[val] += 1;
    } else {
      frequencyCounter1[val] = 1;
    }
  }

  // loop through the second array and store the frequency of the values in the second object
  for(let val of arr2){
    // if the value is not in the object, add it and set it to 1, else increment the value by 1
    if(frequencyCounter2[val]){
      frequencyCounter2[val] += 1;
    } else {
      frequencyCounter2[val] = 1;
    }
  }

  // loop through the first object
  for(let key in frequencyCounter1){
    // if the key squared is not in the second object, return false
    if(!(key ** 2 in frequencyCounter2)){
      return false;
    }
    // if the frequency of the value in the first object is not the same as the frequency of the value squared in the second object, return false
    if(frequencyCounter1[key] !== frequencyCounter2[key ** 2]){
      return false;
    }
  }

  // if all the conditions are met, return true
  return true;
};


// You code here



module.exports = {
  sameFrequency
}


