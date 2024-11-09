const findMedianSortedArrays = (nums1, nums2) => {
  // step 1: Merge the two arrays into one array
  function mergeArrays(arr1, arr2) {
    // Create an empty array to store the merged array
    let mergedArray = [];
    let i = 0;
    let j = 0;

    // Loop through the two arrays and compare the elements
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
    // Add the remaining elements of the first array to the merged array
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }

    // Add the remaining elements of the second array to the merged array
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
    return mergedArray;
  }

  // Step 2: Sort the merged array
  let mergedArray = mergeArrays(nums1, nums2);



  // Step 3: Find the median of the merged array
  let n = mergedArray.length;
  let median = 0;
  if (n % 2 === 0) {
    median = (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
  } else {
    median = mergedArray[Math.floor(n / 2)];
  }


  // step 4: Return the median
  return median;

};

module.exports =  findMedianSortedArrays;
