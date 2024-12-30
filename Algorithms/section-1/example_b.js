/*
  Write a function that has a time complexity of O(n log n)
  nLogNFun(10) => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  nLogNFun(5) => 1, 2, 3, 4, 5
  nLogNFun(3) => 1, 2, 3
  nLogNFun(1) => 1
*/
// function nLogNFun(n){
//   x = y;
//   while(n > 1){
//    n = Math.floor(n/2);
//    for(let i = 1; i <= x; i++){
//      console.log(i);
//    }
//   }
// }

/*
*/
function mergeSort(arr){
  if(arr.length <= 1){
    return arr;
  }
  let middleIndex = Math.floor(arr.length / 2);
  let left = arr.slice(0, middleIndex);
  let right = arr.slice(middleIndex, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}
/*
  Example of how merge sort works with the array [38, 27, 43, 3, 9, 82, 10]:

  Initial array: [38, 27, 43, 3, 9, 82, 10]

  Step 1: Split the array into two halves
  [38, 27, 43] and [3, 9, 82, 10]

  Step 2: Split each half into two halves
  [38] and [27, 43]
  [3, 9] and [82, 10]

  Step 3: Split the remaining halves
  [27] and [43]
  [3] and [9]
  [82] and [10]

  Step 4: Merge the sorted halves
  [27, 43] -> [27, 38, 43]
  [3, 9] -> [3, 9]
  [82, 10] -> [10, 82]

  Step 5: Merge the sorted halves
  [27, 38, 43] and [3, 9, 10, 82]

  Final sorted array: [3, 9, 10, 27, 38, 43, 82]
*/
function merge(left, right){
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      result.push(left[leftIndex]);
      leftIndex++;
    }else{
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// nLogNFun(10); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

module.exports = {
  mergeSort,
  merge
};
