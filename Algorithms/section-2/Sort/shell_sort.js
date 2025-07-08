/*
======================
||    shell sort    ||       
======================
shell sort is an in-place comparison 
sorting algorithm, which sorts a 
list by using a gap sequence.
*/

const shellSort = (arr) => {
  let n = arr.length;
  // Start with a big gap, then reduce the gap
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
};

module.exports = shellSort;
