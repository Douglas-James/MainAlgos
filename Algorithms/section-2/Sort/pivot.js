/*
======================
||    Pivot         ||
======================
  // set pivot to the first element
  // set swapIdx to the first element
  // loop through the array
  //   if the current element is less than the pivot
  //     increment swapIdx
  //     swap the current element with the element at swapIdx
  // swap the pivot with the element at swapIdx
  // return swapIdx

*/
// function pivot(arr, start=0, end=arr.length+1){
//   function swap(array, i, j) {
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }

//   var pivot = arr[start];
//   var swapIdx = start;

//   for(var i = start + 1; i < arr.length; i++){
//     if(pivot > arr[i]){
//       swapIdx++;
//       swap(arr,swapIdx,i);
//     }
//   }
//   swap(arr,start,swapIdx);
//   return swapIdx;
// }
const pivot = (arr, start = 0, end = arr.length + 1) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  // we are assuming the pivot point is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
};
module.exports = pivot;
